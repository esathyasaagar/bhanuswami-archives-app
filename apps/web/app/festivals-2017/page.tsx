import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "../components/PageLayout";

export default function Festivals2017Page() {
  return (
    <PageLayout title="Festivals – 2017" breadcrumbs={[{ label: "Festivals", href: "/festivals" }, { label: "2017", href: "/festivals-2017" }]}>
      <Card className="border-[var(--color-border)]">
        <CardContent className="p-6">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Festival lectures from 2017. Content is being organized and individual recordings will be listed here.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
