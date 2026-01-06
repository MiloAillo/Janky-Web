import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { JSX } from "react";

export const Login = (): JSX.Element => {
    return (
        <section className="min-h-screen w-screen bg-neutral-800 flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-4xl font-semibold text-white/90">Notes</p>
                <p className="text-2xl font-light text-white/60"><span className="text-yellow-500">All-in-one</span> note taking app</p>
            </div>
            <div className="w-100">
                <Card className="bg-white/30 border-0 backdrop-blur-2xl">
                    <CardContent className="flex flex-col gap-3">
                        <Input placeholder="email" className="border-0 bg-neutral-100/80" />
                        <Input placeholder="password" className="border-0 bg-neutral-100/80" />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-neutral-800 font-semibold">Login</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}