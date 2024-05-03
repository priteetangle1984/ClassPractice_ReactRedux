import Section from "./Section";
import Heading from "./Heading";

export default function Headings() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>sub-heading</Heading>
          <Heading>sub-heading</Heading>
          <Heading>sub-heading</Heading>
          <Section level={4}>
            <Heading>sub-sub-heading</Heading>
            <Heading>sub-sub-heading</Heading>
            <Heading>sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
