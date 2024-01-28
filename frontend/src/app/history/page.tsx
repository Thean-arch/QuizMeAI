import History from "@/components/History";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LucideLayoutDashboard } from "lucide-react";

const page = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div className="inset-0 flex items-center justify-center py-20">
      <Card className="w-10/12 lg:max-w-[500px] bg-white shadow-xl">
        <CardHeader className="flex justify-between items-center p-6">
          <CardTitle className="text-2xl font-bold">History</CardTitle>
          <Link
            className={`${buttonVariants()} text-white rounded px-4 py-2`}
            href="/dashboard"
          >
            <LucideLayoutDashboard className="mr-2" />
            Back to Dashboard
          </Link>
        </CardHeader>
        <CardContent className="max-h-[60vh] overflow-scroll mx-auto p-6">
          <History limit={100} userId={session.user.id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
