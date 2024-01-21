import { BarChart, CheckSquare, Flag, Home, Layers, LifeBuoy, Search, Settings, Users } from "lucide-react";

import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar(){
  return (
    //space-6 add um espacamento de 24px no topo dos elementos
<aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8"> 
  <strong className="mx-1">Untitleed UI</strong>

  <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
<Search className=" h-5 w-5 text-zinc-500"/>
<input type="text"
      className="flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
      placeholder="Search" />
  </div>
  <nav className="space-y-0.5">
    <NavItem title="Home" icon={Home}/>
    <NavItem title="Dashboard" icon={BarChart}/>
    <NavItem title="Projects" icon={Layers}/>
    <NavItem title="Tasks" icon={CheckSquare}/>
    <NavItem title="Reporting" icon={Flag}/>
    <NavItem title="Users" icon={Users}/>
  </nav>

  <div className="mt-auto flex flex-col gap-6">
    <nav className="space-y-0.5">
    <NavItem title="Suport" icon={LifeBuoy}/>
    <NavItem title="Settings" icon={Settings}/>
    </nav>

    <UsedSpaceWidget />

    <div className="h-px bg-zinc-200 "/>

    <Profile />
  </div>
</aside>
  )
}