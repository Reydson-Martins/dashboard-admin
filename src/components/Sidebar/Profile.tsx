import { LogOut } from "lucide-react";


export function Profile() {
  return(
    <div className="flex items-center gap-3">
      <img src="https://github.com/Reydson-Martins.png" alt=""
            className="h-10 w-10 rounded-full" />
      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-zinc-700">Reydson Martins</span>
        <span className="truncate text-sm text-zinc-500">reydson.eduardo@gmail.com</span>
        </div>      
        <button type="button" className="ml-auto hover:bg-zinc-50 rounded-md">
          <LogOut className="h-5 w-5 text-zinc-500" />
        </button>
    </div>
  )
}