import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Values = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "https://img.icons8.com/?size=100&id=132&format=png&color=9ECB75",
              title: "Invent",
              description:
                "We're passionate about what we do and it shows in our work.",
            },
            {
              icon: "https://img.icons8.com/?size=100&id=11227&format=png&color=9ECB75",
              title: "Deliver",
              description:
                "We believe in the power of teamwork and diverse perspectives.",
            },
            {
              icon: "https://img.icons8.com/?size=100&id=37897&format=png&color=9ECB75",
              title: "Include",
              description:
                "We constantly push boundaries to create cutting-edge solutions.",
            },
            {
              icon: "https://img.icons8.com/?size=100&id=2606&format=png&color=9ECB75",
              title: "Integrity",
              description:
                "We constantly push boundaries to create cutting-edge solutions.",
            },
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={value.icon} className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
