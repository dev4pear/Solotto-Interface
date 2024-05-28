import { useWallet } from "@solana/wallet-adapter-react";
import Button from "components/Button";
import { useProgram } from "hooks/useProgram";
import { initState, requestResult, updateResult } from "lib/methods";

export default function Web3Test() {
    const { program } = useProgram();
    const wallet = useWallet();
    const onInitState = async () => {
        if (!program) return;
        
        initState(program, wallet);
    }

    const onRequestResult = async () => {
        if (!program) return;
        
        requestResult(program, wallet);
    }

    const onUpdateResult = async () => {
        if (!program) return;
        
        updateResult(program, wallet);
    }
    return (
        <div className="mx-8 flex flex-col">
            <h1 className="font-bold text-[40px]">Web3 Test</h1>
            <div className="mt-8 flex gap-5">
                <Button primary className="px-5 py-3 rounded-md" onClick={onInitState}>Init State</Button>
                <Button primary className="px-5 py-3 rounded-md" onClick={onRequestResult}>Request Result</Button>
                <Button primary className="px-5 py-3 rounded-md" onClick={onUpdateResult}>Update Result</Button>
            </div>
        </div>
    )
}