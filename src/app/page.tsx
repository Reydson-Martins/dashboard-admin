import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input  from "@/components/Input"
import { Mail } from "lucide-react";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
    
    <SettingsTabs />

    <div className="mt-6 flex flex-col ">

      <div className="flex justify-between items-center border-b bordder-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">Update your photo and personal details her.</span>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
          <button form="settings" type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700 ">Save</button>
        </div>
      </div>

    <form id="settings" action="" className="mt-6 flex flex-col w-full gap-5 divide-y divide--zinc-500">
      <div className="grid gap-3 grid-cols-form">
        <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
        <div className="grid gap-6 grid-cols-2">
          <Input.Root>
            <Input.Control id="firstName" defaultValue="First Name" />
          </Input.Root>
          <Input.Root>
            <Input.Control id="" defaultValue="Last Name" />
          </Input.Root>
        </div>
        
      </div>


      <div className="grid gap-3 grid-cols-form pt-5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control id="email" type="email" defaultValue="user@gmail.com" />
          </Input.Root>
      </div>

      <div className="grid gap-3 grid-cols-form pt-5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Your Photo
          <span className="mt-0.5 text-sm font-normal text-zinc-500 block">This will be displayed on your profile</span>
        </label>
          <div></div>
      </div>

      <div className="grid gap-3 grid-cols-form pt-5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">Role</label>
          <Input.Root>
            <Input.Control id="role" defaultValue="CTO" />
          </Input.Root>
      </div>

      <div className="grid gap-3 grid-cols-form pt-5">
        <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
          <div></div>
      </div>

      <div className="grid gap-3 grid-cols-form pt-5">
        <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
          <div></div>
      </div>

      <div className="grid gap-3 grid-cols-form pt-5">
        <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
          Bio
          <span className="mt-0.5 text-sm font-normal text-zinc-500 block">Write a short introduction</span>
        </label>
          <div></div>
      </div>

      <div className="grid gap-3 grid-cols-form pt-5 gap-2 pt-5">
        <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
          Portfolio projects
          <span className="mt-0.5 text-sm font-normal text-zinc-500 block">Share a few snippets of your work</span>
        </label>
          <div></div>
      </div>

      <div className="flex items-center justify-end">
      <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
      <button  type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700 ">Save</button>
        
      </div>
    </form>
    </div>
  
    </>
  );
}
