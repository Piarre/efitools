import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { toast } from "sonner";

export const Header = () => {
  const checkUpdate = (): Promise<{ version: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ version: "1.0.0" });
      }, 1000);
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>EfiTools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-between">
          <div>Version: </div>
          <div className="space-y-4">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                toast.promise(checkUpdate, {
                  loading: "Checking for update...",
                  success: (data) => {
                    return `New version available: ${data.version}`;
                  },
                });
              }}
            >
              Check for update
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
