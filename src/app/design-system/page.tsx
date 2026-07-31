import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { SectionCard } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";

export default function DesignSystem() {
  return (
    <>
      <Container>
        <SectionCard
          title="Typography"
          description="Base heading, text, and paragraph styles for consistent spacing and hierarchy."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Heading level={1}>H1 Heading</Heading>
            </div>
            <div>
              <Heading level={2}>H2 Heading</Heading>
            </div>
            <div>
              <Heading level={3}>H3 Heading</Heading>
            </div>
            <div>
              <Heading level={4}>H4 Heading</Heading>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Buttons"
          description="Primary, secondary, and ghost utility buttons with focus and disabled states."
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </SectionCard>

        <SectionCard
          title="Cards"
          description="Structured card primitives with header, content, and footer slots."
        >
          <Card className="space-y-6">
            <CardHeader>
              <CardTitle>Example card</CardTitle>
              <CardDescription>
                Cards group related content and actions in an easy-to-scan surface.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="primary">Take action</Button>
              <Button variant="secondary">Learn more</Button>
            </CardFooter>
          </Card>
        </SectionCard>

        <SectionCard
          title="Badges"
          description="Label states and status indicators with small capsule badges."
        >
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </SectionCard>
      </Container>
    </>
  );
}
