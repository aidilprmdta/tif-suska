import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menu, Home, BookOpen, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo */}
        <div className="font-semibold text-xl">
          <a href="/">PRODI TEKNIK INFORMATIKA</a>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="flex items-center gap-2">
                <Home size={18} /> Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Profil</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-48 flex flex-col gap-2">
                  <NavigationMenuLink href="/visi-misi">Visi & Misi</NavigationMenuLink>
                  <NavigationMenuLink href="/struktur">Struktur Organisasi</NavigationMenuLink>
                  <NavigationMenuLink href="/dosen">Dosen</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Akademik</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-48 flex flex-col gap-2">
                  <NavigationMenuLink href="/kurikulum">Kurikulum</NavigationMenuLink>
                  <NavigationMenuLink href="/jadwal">Jadwal Kuliah</NavigationMenuLink>
                  <NavigationMenuLink href="/kalender">Kalender Akademik</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/kontak" className="flex items-center gap-2">
                <Phone size={18} /> Kontak
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu size={26} />
        </div>

      </div>
    </nav>
  );
}
