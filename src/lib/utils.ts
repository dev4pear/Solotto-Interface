import { PublicKey } from "@solana/web3.js";

export const programId = new PublicKey("FFZGUi5dpkBmPbhU6UM4tQ7oHB8zzLYXLpDgHJd5ervG");

export const getVrfClient = (vrf: PublicKey, payer: PublicKey) => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("STATE"),
            vrf.toBuffer(),
            payer.toBuffer(),
        ],
        programId
    );
}

export const classNames = (...classes: Array<string | undefined>) => {
    return classes.map((cls: string | undefined) => cls ? cls.trim().split(" ").join(" ") : "").join(" ");
}