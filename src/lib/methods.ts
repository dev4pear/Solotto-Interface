import { BorshInstructionCoder, Program } from "@project-serum/anchor";
import { SolotLottery } from "./idl/SolotLottery";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { getVrfClient } from "./utils";
import { Callback, PermissionAccount, QueueAccount, SWITCHBOARD_LABS_DEVNET_PERMISSIONLESS_QUEUE, SwitchboardProgram, VrfLiteAccount } from "@switchboard-xyz/solana.js";
import { AnchorProvider } from "@coral-xyz/anchor";
import { getInitStateInstruction, getRequestResultInstruction, getUpdateResultInstruction } from "./instructions";

export const initState = async (
    program: Program<SolotLottery>,
    wallet: WalletContextState,
) => {
    if (!wallet.publicKey) return;

    try {
        const payer = wallet.publicKey;
        const vrfSecret = Keypair.generate();
        console.log(`VRF Account: ${vrfSecret.publicKey.toString()}`);
        const [vrfClientKey] = getVrfClient(vrfSecret.publicKey, payer);
        console.log(`VRF Client Key: ${vrfClientKey.toString()}`);
        const vrfIxCoder = new BorshInstructionCoder(program.idl);
        const vrfClientCallback: Callback = {
            programId: program.programId,
            accounts: [
                { pubkey: vrfClientKey, isSigner: false, isWritable: true },
                { pubkey: vrfSecret.publicKey, isSigner: false, isWritable: false },
            ],
            ixData: vrfIxCoder.encode("updateResult", ""),
        };

        const switchboardProgram = await SwitchboardProgram.fromProvider(program.provider as AnchorProvider);
        const [queueAccount, queue] = await QueueAccount.load(
            switchboardProgram,
            SWITCHBOARD_LABS_DEVNET_PERMISSIONLESS_QUEUE
        );

        const { authority, dataBuffer } = queue;
        console.log(`authority: ${authority.toString()}`);
        console.log(`dataBuffer: ${dataBuffer.toString()}`);
        const [vrfAccount] = await queueAccount.createVrfLiteInstructions(payer, {
            callback: vrfClientCallback,
            authority: vrfClientKey,
            enable: false,
        });



        console.log(`Created VRF Account: ${vrfAccount.publicKey.toString()}`);

        const [permissionAccount, permissionBump] = PermissionAccount.fromSeed(
            queueAccount.program,
            authority,
            queueAccount.publicKey,
            vrfAccount.publicKey,
        );


        console.log(`Created Permission Account: ${permissionAccount.publicKey.toString()} Bump: ${permissionBump}`);

        const transaction = new Transaction();
        transaction.add(await getInitStateInstruction({
            program,
            state: vrfClientKey,
            vrf: vrfAccount.publicKey,
            payer,
            authority: payer,
            permissionBump,
            switchboardStateBump: queueAccount.program.programState.bump,
        }));


        await wallet.sendTransaction(transaction, program.provider.connection, { skipPreflight: true });
        // If queue requires permissions to use VRF, check the correct authority was provided
        // if (!unpermissionedVrfEnabled) {
        //     if (!payer.equals(authority)) {
        //         throw new Error(
        //             `queue requires PERMIT_VRF_REQUESTS and wrong queue authority provided`
        //         );
        //     }

        //     await permissionAccount.set({
        //         //   queueAuthority: payer,
        //         permission: new types.SwitchboardPermission.PermitVrfRequests(),
        //         enable: true,
        //     });
        //     console.log(`Set VRF Permissions`);
        // }
    } catch (error) {
        console.log(error);
    }
}

export const requestResult = async (
    program: Program<SolotLottery>,
    wallet: WalletContextState,
) => {
    if (!wallet.publicKey) return;

    try {

        const vrfAccount = new PublicKey("6GToMRu7jwvFFWr3fCRWx7oV8NZ4CHr7RzTwZNgDtu8N");
        console.log(`VRF Account: ${vrfAccount.toString()}`);
        const vrfClientKey = new PublicKey("AzpTdYb3PeEKQ8L8WKnUwunviebu254pLmrFtDosNAUU")
        console.log(`VRF Client Key: ${vrfClientKey.toString()}`);

        const switchboardProgram = await SwitchboardProgram.fromProvider(program.provider as AnchorProvider);
        const [queueAccount, queue] = await QueueAccount.load(
            switchboardProgram,
            SWITCHBOARD_LABS_DEVNET_PERMISSIONLESS_QUEUE
        );

        const { authority, dataBuffer } = queue;
        console.log(`authority: ${authority.toString()}`);
        console.log(`dataBuffer: ${dataBuffer.toString()}`);


        const [permissionAccount, permissionBump] = PermissionAccount.fromSeed(
            queueAccount.program,
            authority,
            queueAccount.publicKey,
            vrfAccount,
        );

        console.log(`Permission Account: ${permissionAccount.publicKey.toString()} Bump: ${permissionBump}`);

        const vrf = await (await switchboardProgram.oracleProgramAccount).vrfLiteAccountData.fetch(vrfAccount);
        console.log((vrf.escrow as PublicKey).toString());
        const transaction = new Transaction();
        transaction.add(await getRequestResultInstruction({
            program,
            state: vrfClientKey,
            authority: new PublicKey("3qWq2ehELrVJrTg2JKKERm67cN6vYjm1EyhCEzfQ6jMd"),
            switchboardProgram: queueAccount.program.oracleProgramId,
            vrf: vrfAccount,
            oracleQueue: queueAccount.publicKey,
            queueAuthority: authority,
            dataBuffer,
            permission: permissionAccount.publicKey,
            escrow: vrf.escrow as PublicKey,
            programState: queueAccount.program.programState.publicKey,
        }));


        const txSignature = await wallet.sendTransaction(transaction, program.provider.connection, { skipPreflight: true });
        console.log(txSignature);
    } catch (error) {
        console.log(error);
    }
}

export const updateResult = async (
    program: Program<SolotLottery>,
    wallet: WalletContextState,
) => {
    if (!wallet.publicKey) return;

    try {
        const vrfAccount = new PublicKey("6GToMRu7jwvFFWr3fCRWx7oV8NZ4CHr7RzTwZNgDtu8N");
        console.log(`VRF Account: ${vrfAccount.toString()}`);
        const vrfClientKey = new PublicKey("AzpTdYb3PeEKQ8L8WKnUwunviebu254pLmrFtDosNAUU")
        console.log(`VRF Client Key: ${vrfClientKey.toString()}`);

        const transaction = new Transaction();
        transaction.add(await getUpdateResultInstruction({
            program,
            state: vrfClientKey,
            vrf: vrfAccount,
        }));


        const txSignature = await wallet.sendTransaction(transaction, program.provider.connection, { skipPreflight: true });
        console.log(txSignature);
    } catch (error) {
        console.log(error);
    }
}