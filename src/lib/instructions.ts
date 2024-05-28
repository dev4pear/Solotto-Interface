import { Program } from "@project-serum/anchor"
import { SolotLottery } from "./idl/SolotLottery"
import { PublicKey, SystemProgram, SYSVAR_RECENT_BLOCKHASHES_PUBKEY, } from "@solana/web3.js"
import { BN } from "bn.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

export const getInitStateInstruction = async ({
    program,
    state,
    vrf,
    payer,
    authority,
    permissionBump,
    switchboardStateBump,
}: {
    program: Program<SolotLottery>,
    state: PublicKey,
    vrf: PublicKey,
    payer: PublicKey,
    authority: PublicKey,
    permissionBump: number,
    switchboardStateBump: number,
}) => {
    return await program.methods.initState({
        maxResult: new BN(1337000),
        permissionBump,
        switchboardStateBump,
    }).accounts({
        state,
        vrf,
        payer,
        authority,
        systemProgram: SystemProgram.programId,
    }).instruction();
};

export const getRequestResultInstruction = async ({
    program,
    state,
    authority,
    switchboardProgram,
    vrf,
    oracleQueue,
    queueAuthority,
    dataBuffer,
    permission,
    escrow,
    programState,
}: {
    program: Program<SolotLottery>,
    state: PublicKey,
    authority: PublicKey,
    switchboardProgram: PublicKey,
    vrf: PublicKey,
    oracleQueue: PublicKey,
    queueAuthority: PublicKey,
    dataBuffer: PublicKey,
    permission: PublicKey,
    escrow: PublicKey,
    programState: PublicKey,
}) => {
    return await program.methods.requestResult({})
        .accounts({
            state,
            authority,
            switchboardProgram,
            vrf,
            oracleQueue,
            queueAuthority,
            dataBuffer,
            permission,
            escrow,
            recentBlockhashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
            programState,
            tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction();
};

export const getUpdateResultInstruction = async ({
    program,
    state,
    vrf,
}: {
    program: Program<SolotLottery>,
    state: PublicKey,
    vrf: PublicKey,
}) => {
    return await program.methods.updateResult({})
        .accounts({
            state,
            vrf,
        })
        .instruction();
};