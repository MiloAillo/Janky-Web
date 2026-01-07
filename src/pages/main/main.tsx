import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState, type JSX } from "react";
import { useLoaderData } from "react-router-dom";

export const Main = (): JSX.Element => {
    const data = useLoaderData()

    const [ userData, setUserData ] = useState<{name: string, id: string}>()
    const [ notes, setNotes ] = useState<{tittle: string, content: string}[]>()
    const [ userFriends, setUserFriends ] = useState<{id: string, name: string}[]>()

    
    useEffect(() => {
        if (!data) window.location.href = "/login"

        setNotes(data.data.notes)
        setUserData(data.data.user)
        setUserFriends(data.data.friends)
    })

    const logout = () => {
        localStorage.removeItem("Authorization")
        window.location.href = "/login"
    }

    return (
        <section className="min-h-screen w-screen bg-neutral-800 flex flex-col items-center gap-3">
            {/* Navbar */}
            <div className="w-screen  max-w-225 h-15 flex flex-row justify-between items-center px-7 mx-2 mt-2 bg-white/10 border border-white/20 shadow rounded-xl">
                <p className="font-semibold text-2xl text-white/80">Notes</p>
                <div className="flex gap-5 items-center">
                    <Button onClick={() => logout()} className="bg-black/15 backdrop-blur-2xl tracking-wide text-white/80">
                        Logout
                    </Button>
                </div>
            </div>

            <div className="w-screen max-w-225 h-15 flex flex-col sm:flex-row mx-2 gap-5">
                <div className="w-full flex flex-col gap-3 px-5 py-5 flex-2 h-fit bg-white/10 border border-white/20 shadow rounded-xl">
                    {notes && (
                        notes.map((note: {tittle: string, content: string}) => (
                    <Dialog>
                        <DialogTrigger className="w-full">
                            <div className="w-full bg-black/20 rounded-xl px-4 py-4 flex flex-col gap-2 h-fit text-left">
                                <p className="text-xl font-semibold text-white/80">{note.tittle}</p>
                                <p className="text-white/75">{note.content}</p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="bg-white/10 backdrop-blur-[10px] border-0">
                           <div className="flex items-center gap-3">
                                <div className="w-full flex flex-col gap-2 h-fit text-left">
                                    <p className="text-xl font-semibold text-white/80">{note.tittle}</p>
                                    <p className="text-white/75">{note.content}</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    )))}
                </div>

                <div className="w-full flex-[1.1] h-fit flex flex-col gap-5">
                    <div className="w-full flex-1 h-fit bg-white/10 border border-white/20 shadow rounded-xl px-6 py-4 flex flex-col gap-2">
                        <p className="font-semibold text-xl text-white/80">Your Profile</p>
                            <Dialog>
                                <DialogTrigger>
                                    <div className="flex bg-black/20 rounded-md items-center px-3 gap-3 py-2">
                                        <div className="h-12  shrink-0 w-12 bg-neutral-500 rounded-full" />
                                        <div>
                                            <p className="text-normal text-left text-white/75">{userData?.name}</p>
                                            <p className="text-sm text-white/40">{userData?.id.split("").map((letter, index) => {
                                                if (index < 17) return letter
                                                if (index === 17) return "..."
                                            })}</p>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-white/10 backdrop-blur-[10px] border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="h-15 shrink-0 w-15 bg-neutral-500 rounded-full" />
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-left text-white/75 text-xl">{userData?.name}</p>
                                            <p className="text-normal text-white/40">{userData?.id}</p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                    </div>

                    <div className="w-full flex-1 h-fit bg-white/10 border border-white/20 shadow rounded-xl px-6 py-4 flex flex-col gap-2">
                        <p className="font-semibold text-xl text-white/80">Friends</p>
                        {userFriends && userFriends.map((friend) => (
                            <Dialog>
                                <DialogTrigger>
                                    <div className="flex bg-black/20 rounded-md items-center px-3 gap-3 py-2">
                                        <div className="h-12  shrink-0 w-12 bg-neutral-500 rounded-full" />
                                        <div>
                                            <p className="text-normal text-left text-white/75">{friend.name}</p>
                                            <p className="text-sm text-white/40">{friend.id.split("").map((letter, index) => {
                                                if (index < 17) return letter
                                                if (index === 17) return "..."
                                            })}</p>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-white/10 backdrop-blur-[10px] border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="h-15 shrink-0 w-15 bg-neutral-500 rounded-full" />
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-left text-white/75 text-xl">Admin</p>
                                            <p className="text-normal text-white/40">dd4b7f34-487e-4285-a1a6-8a66f4997cf4</p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}