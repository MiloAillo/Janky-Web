import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef, useState, type JSX } from "react";
import { AlertCircleIcon } from "lucide-react"
import { api_login } from "@/api/login";

export const Login = (): JSX.Element => {
    const name = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)

    const [ isFailed, setIsFailed ] = useState<boolean>(false)
    const [ failedMessage, setFailedMessage ] = useState<string>("")

    const login = async () => {
        console.log(name.current?.value, password.current?.value)

        if(name.current?.value === "" || password.current?.value === "") {
            return console.log("please fill it")
        }

        setIsFailed(false)
        if(name.current?.value && password.current?.value) {
            try {
                const res = await api_login(name.current?.value, password.current?.value)
                console.log(res)

                localStorage.setItem("Authorization", res.token)
                window.location.href = "/"
            } catch (err: any) {
                console.log(err.message)
                setIsFailed(true)
                setFailedMessage(err.message)
            }
        }
    }

    return (
        <section className="min-h-screen w-screen bg-neutral-800 flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-4xl font-semibold text-white/90">Notes</p>
                <p className="text-2xl font-light text-white/60"><span className="text-yellow-500">All-in-one</span> note taking app</p>
            </div>
            <div className="w-100 flex flex-col gap-5">
                <Alert variant={"destructive"} className={`bg-white/80 border-0 backdrop-blur-2xl ${isFailed ? "" : "hidden"}`}>
                    <AlertCircleIcon />
                    <AlertTitle className="font-semibold">Login Failed!</AlertTitle>
                    <AlertDescription>{failedMessage}</AlertDescription>
                </Alert>

                <Card className="bg-white/30 border-0 backdrop-blur-2xl">
                    <CardContent className="flex flex-col gap-3">
                        <Input ref={name} placeholder="email" className="border-0 bg-neutral-100/80" />
                        <Input ref={password} placeholder="password" className="border-0 bg-neutral-100/80" />
                    </CardContent>
                    <CardFooter>
                        <Button onClick={login} className="w-full bg-neutral-800 font-semibold">Login</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}