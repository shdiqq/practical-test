'use client';

import { Terminal, Mail, MapPin } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { api } from '@/libs/api';

import type { User } from '@/models/types/user.type';

async function fetchUsers(): Promise<User[]> {
  const response = await api.get('/users');
  return response.data;
}

export default function ListUser() {
  const {
    data: users,
    error,
    isLoading
  } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  const formatAddress = (address: User['address']) => {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4 rounded-md" />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-5/6 rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-xl mx-auto">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}. Please refresh the page to try again.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users?.map((user) => (
        <Card
          key={user.id}
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <CardHeader>
            <CardTitle className="text-primary">{user.name}</CardTitle>
            <CardDescription>@{user.username}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${user.email}`} className="truncate hover:underline">
                {user.email}
              </a>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
              <span>{formatAddress(user.address)}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
