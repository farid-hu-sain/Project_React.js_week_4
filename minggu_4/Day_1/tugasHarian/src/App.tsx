import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  // Contoh data profil menggunakan state
  const [profile, setProfile] = useState({
    name: "Santri Koding",
    email: "santri@example.com",
    bio: "Seseorang yang sedang belajar React, Tailwind CSS, dan shadcn/ui.",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <ModeToggle />
          </div>
          <CardTitle>Profil Pengguna</CardTitle>
          <CardDescription>
            Informasi profil Anda yang diambil dari komponen UI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div className="grid w-full gap-4">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" value={profile.name} readOnly />
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={profile.email} readOnly />
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" value={profile.bio} readOnly />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end pt-6">
          <Button>Edit Profil</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
