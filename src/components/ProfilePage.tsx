"use client";

import { useState } from "react";
import { User, Package, MapPin, Key, LogOut, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useLogout from "@/utils/logout";
import AddressForm from "./Address";

import UserOrders from "./UserOrders";

interface UserData {
  firstName: string;
  lastName?: string;
  email: string;
  dateOfBirth?: string;
  gender?: string;
  phone?: string;
  orders?: number;
  addresses?: number;
}

interface ProfilePageProps {
  user: UserData;
}

export default function ProfilePage({ user }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState("profile");
  const logout = useLogout();

  const userData: UserData = {
    firstName: user.firstName || "User",
    lastName: user.lastName || "Undisclosed",
    email: user.email || "",
    dateOfBirth: user.dateOfBirth || "Undisclosed",
    gender: user.gender || "Undisclosed",
    phone: user.phone || "Undisclosed",
    orders: user.orders || 0,
    addresses: user.addresses || 0,
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
            {/* Profile Information */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Profile information</h2>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-muted-foreground">Full name</h3>
                    <p>{userData.firstName}</p>
                  </div>
                  <div>
                    <h3 className="text-muted-foreground">Date of birth</h3>
                    <p>{userData.dateOfBirth}</p>
                  </div>
                  <div>
                    <h3 className="text-muted-foreground">Gender</h3>
                    <p>{userData.gender}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Contact methods</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-muted-foreground">Email</h3>
                    <p>{userData.email}</p>
                  </div>
                  <div>
                    <h3 className="text-muted-foreground">Phone</h3>
                    <p>{userData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        );

      case "orders":
        return (
          <UserOrders />
        );

      case "addresses":
