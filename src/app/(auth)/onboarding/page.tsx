"use client"
import { UserValidation, User } from "@/db/validations/UserValidation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChangeEvent } from "react"

export default function onboarding(){
    const form = useForm<User>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            name: '',
            username: '',
            profile_pic: '',
            bio: ''
        } 
    });

    const handleImageChange = (
        e: ChangeEvent<HTMLInputElement>,
        fieldChange: (value: string) => void 
    ) => {
        e.preventDefault();

        const fileReader = new FileReader();

        if(e.target.files && e.target.files.length > 0){
            const file = e.target.files[0];
            if(!file.type.includes('image')) return;

            fileReader.onload = (event) => {
                const fileData = event.target?.result?.toString() || '';
                fieldChange(fileData);
            }
            fileReader.readAsDataURL(file);
        }
    }

    async function onSubmit(user: User): Promise<any> {
        console.log(user);
    }

    return(
        <section className="flex text-white items-center justify-center">
            <div className="bg-black px-6 md:px-12 md:py-8 py-6 rounded-lg w-[40rem]">
                <div className="w-full my-2">
                    <h1 className="text-2xl text-start font-semibold text-purple-800">On Boarding</h1>
                    <p className="text-[0.7rem]">Complete your profile to get started</p>
                </div>
                <hr className="border border-slate-600 rounded my-4"/>
                <div className="">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            {/* image */}
                            <FormField
                                control={form.control}
                                name="profile_pic"
                                render={({ field }) => (
                                    <FormItem className="flex  items-center justify-center gap-6">
                                        <FormLabel className=" w-24 h-24 rounded-full     flex items-center justify-center bg-slate-800">
                                            {
                                                field.value ? (
                                                    <Image src={field.value} alt={"profile pic"}
                                                        width={90} height={90} className=" object-cover w-full h-full rounded-full"
                                                    />
                                                ) : (
                                                    <Image src={'/images/icons/profile.svg'} alt={"profile pic"}
                                                        width={24} height={24}  
                                                    />
                                                )

                                            }
                                        </FormLabel>
                                        <FormControl className="flex-1">
                                            <Input placeholder="No file selected"
                                                type="file"
                                                accept="image/*"
                                                className="border-none"
                                                onChange={ (e) => handleImageChange(e, field.onChange)}
                                              />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Choose File to upload
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* username */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter username..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* bio */}
                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea rows={10} placeholder="Enter bio.." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="my-3 bg-purple-800">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}