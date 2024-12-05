import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Effortlessly plan and schedule your events with our intuitive calendar interface.",
  },
  {
    icon: Users,
    title: "Attendee Management",
    description:
      "Manage your guest lists, RSVPs, and communications all in one place.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Get instant notifications and updates on your event status and attendee interactions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">About Dumbstyle</h2>
      <p className="text-center mb-12 max-w-2xl mx-auto text-muted-foreground">
        Dumbstyle is an innovative event management platform designed to
        simplify the process of planning, organizing, and executing events of
        all sizes. Our mission is to empower event planners with powerful tools
        and intuitive interfaces.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
