"use client";
import React from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation';

export default function LogoutButton() {

    const router = useRouter();
    
    async function handleLogout(){
        await authClient.signOut();
        router.push('/');
    }

  return (
    <Button variant="outline" onClick={handleLogout} >Logout</Button>
  )
}

