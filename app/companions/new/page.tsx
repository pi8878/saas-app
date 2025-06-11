// import CompanionForm from '../CompanionForm'
// import { auth } from '@clerk/nextjs/server'
// import { redirect } from 'next/navigation';

// const NewCompanion = async () => {
//   const {userId} = await auth();
//   if(!userId) {redirect('/sign-in');}

//   // if(!userId) redirect(`/sign-in?redirect_url=/companions/new`)



//   return (
//     <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
//       <article className="w-full gap-4 flex flex-col">
//         <h1>Companion Builder</h1>

//         <CompanionForm />
//       </article>
//     </main>
//   )
// }

// export default NewCompanion


'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CompanionForm from '../CompanionForm';

export default function NewCompanionPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in?redirect_url=/companions/new');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) return null; // or loading spinner

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
}
