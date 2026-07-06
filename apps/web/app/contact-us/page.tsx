import PageLayout from "../components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us" breadcrumbs={[{ label: "Contact Us", href: "/contact-us" }]} hideSidebar>
      <div className="max-w-xl">
        <Card className="mb-3 border-[var(--color-border)]">
          <CardContent className="p-3">
            <p className="font-serif text-sm text-muted-foreground leading-relaxed">
              This archive is maintained by volunteer devotees. If you have questions about the archive, wish to report a broken link, or would like to contribute to this service, please use the form below.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-3 border-[var(--color-border)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-2 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs">Your Name *</Label>
              <Input id="name" type="text" className="h-9 text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs">Email Address *</Label>
              <Input id="email" type="email" className="h-9 text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Subject</Label>
              <Select>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="broken">Report a Broken Link</SelectItem>
                  <SelectItem value="contribute">Contribute to the Archive</SelectItem>
                  <SelectItem value="request">Request a Lecture</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs">Message *</Label>
              <Textarea id="message" rows={5} className="text-sm resize-y" />
            </div>
            <Button className="bg-[var(--color-maroon)] hover:bg-[var(--color-maroon-dark)] text-white">
              Send Message
            </Button>
          </CardContent>
        </Card>

        <Card className="border-[var(--color-border)] bg-[oklch(0.98_0.01_80)]">
          <CardContent className="p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-1">About This Archive</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bhanu Swami Archives is a free service maintained by volunteer devotees for the benefit of the Vaiṣṇava community worldwide. All content belongs to Bhanu Swami Media. This archive is offered as a service of devotion (sevā).
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
