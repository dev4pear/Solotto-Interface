import { AnchorProvider, Program } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { IDL, SolotLottery } from "lib/idl/SolotLottery";
import { programId } from "lib/utils";
import { useEffect, useState } from "react";

export function useProgram() {
    const [program, setProgram] = useState<Program<SolotLottery> | undefined>();
    const { connection } = useConnection();
    const anchorWallet = useAnchorWallet();

    useEffect(() => {
        if (!anchorWallet) return;
        const provider = new AnchorProvider(connection, anchorWallet, { commitment: "confirmed" });
        setProgram(new Program(IDL, programId.toString(), provider));
    }, [anchorWallet]);

    return { program };
}