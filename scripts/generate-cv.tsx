import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToFile,
} from "@react-pdf/renderer";
import path from "path";

const C = {
  black: "#1A1A1A",
  accent: "#4A5568",
  light: "#9CA3AF",
  rule: "#D1D5DB",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 72,
    paddingHorizontal: 56,
    backgroundColor: "#FFFFFF",
  },
  headerName: {
    fontSize: 28,
    fontFamily: "Times-Roman",
    color: C.black,
    marginBottom: 8,
  },
  headerMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  headerMetaText: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: C.accent,
  },
  rule: {
    borderBottomWidth: 0.5,
    borderBottomColor: C.rule,
    marginVertical: 14,
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 10.5,
    fontFamily: "Times-Roman",
    color: C.black,
    lineHeight: 1.75,
    marginBottom: 7,
  },
  subLabel: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: C.light,
    marginBottom: 4,
    marginTop: 8,
  },
  entryRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  entryYear: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: C.accent,
    width: 52,
    flexShrink: 0,
    paddingTop: 1,
  },
  entryText: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: C.black,
    flex: 1,
    lineHeight: 1.5,
  },
  simpleEntry: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: C.black,
    lineHeight: 1.5,
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 56,
    right: 56,
    borderTopWidth: 0.5,
    borderTopColor: C.rule,
    paddingTop: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 7.5,
    fontFamily: "Helvetica",
    color: C.light,
  },
  cvHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    gap: 10,
  },
  cvHeaderText: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: C.black,
    letterSpacing: 3,
  },
  cvHeaderRule: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: C.black,
  },
});

// ── Components ──────────────────────────────────────────

const Rule = () => <View style={styles.rule} />;

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionLabel}>{label.toUpperCase()}</Text>
    {children}
  </View>
);

const Entry = ({ year, text }: { year: string; text: string }) => (
  <View style={styles.entryRow}>
    <Text style={styles.entryYear}>{year}</Text>
    <Text style={styles.entryText}>{text}</Text>
  </View>
);

const PageFooter = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>michellewilson.art</Text>
    <Text style={styles.footerText}>studio@michellewilson.art</Text>
    <Text style={styles.footerText}>Updated May 2026</Text>
  </View>
);

// ── Document ─────────────────────────────────────────────

const CVDocument = () => (
  <Document
    title="Michelle R. Wilson — Artist CV"
    author="Michelle R. Wilson"
    subject="Artist CV"
  >
    {/* ── Page 1: Biography ─────────────────────────── */}
    <Page size="A4" style={styles.page}>
      <PageFooter />

      <Text style={styles.headerName}>Michelle R. Wilson</Text>
      <View style={styles.headerMeta}>
        <Text style={styles.headerMetaText}>PAINTER</Text>
        <Text style={styles.headerMetaText}>VANCOUVER, BC</Text>
      </View>

      <Rule />

      <Section label="Biography">
        <Text style={styles.bodyText}>
          Michelle R. Wilson is a Canadian painter based in Vancouver, BC. Her
          work moves across landscape, architectural studies, portraiture, and
          figurative painting, unified by a sustained inquiry into the
          relationship between self, spirit, and the world.
        </Text>
        <Text style={styles.bodyText}>
          Her approach to painting is rooted in slowness, listening, and
          attention — a sensibility shaped by three decades of professional work
          at the intersection of human experience and care: twenty-five years in
          education and community living, holding space for people whose needs
          required genuine presence; and six years as a behavioural medicine
          health coach and somatic practitioner within primary healthcare,
          sitting with people through the slow, tender work of change. She works
          intuitively, allowing each piece to develop through a process of
          attention rather than intention.
        </Text>
        <Text style={styles.bodyText}>
          Her influences include the contemplative traditions of meditation and
          inner stillness; painters such as Georgia O'Keeffe and Frida Kahlo,
          whose authenticity and devotion to their own vision have remained quiet
          companions to her practice; and the experience of travel as a way of
          learning to see.
        </Text>
        <Text style={styles.bodyText}>
          Her earlier bodies of work include figure and portrait studies, a
          series of Paris cityscapes, paintings of dancers in motion, landscapes,
          and home portraits. Her current series, Returning, marks a turn toward
          greater stillness and spaciousness — an exploration of rest,
          embodiment, and the quiet support of the natural and built environment.
        </Text>
        <Text style={styles.bodyText}>
          Her paintings are held in private collections across Canada and the
          United States. She accepts commissions across all subjects and is
          available for collaboration with interior, architectural, and
          curatorial projects.
        </Text>
      </Section>
    </Page>

    {/* ── Page 2: CV ────────────────────────────────── */}
    <Page size="A4" style={styles.page}>
      <PageFooter />

      {/* Page 2 header */}
      <Text style={styles.headerName}>Michelle R. Wilson</Text>
      <View style={styles.cvHeader}>
        <Text style={styles.cvHeaderText}>CV</Text>
        <View style={styles.cvHeaderRule} />
      </View>

      {/* Education */}
      <Section label="Education">
        <Text style={styles.simpleEntry}>
          Studio Art, Capilano University, North Vancouver, BC
        </Text>
      </Section>

      <Rule />

      {/* Exhibitions */}
      <Section label="Exhibitions">
        <Text style={styles.subLabel}>Solo</Text>
        <Entry year="2015" text="Paris, Art and Fashion Collaboration, Lüt Boutique, Vancouver, BC" />
        <Entry year="2011" text="Form, The Whip Gallery Restaurant, Vancouver, BC" />

        <Text style={styles.subLabel}>Group</Text>
        <Entry year="2005" text="Art Gallery of Regina, Regina, SK" />
        <Entry year="2004–05" text="La Bodega Restaurant Gallery, Regina, SK" />
        <Entry year="2004" text="Bushwacker Restaurant Gallery, Regina, SK" />
        <Entry year="2002" text="Waterfall Gallery, Vancouver, BC" />
        <Entry year="2002" text="Studio Blue, Vancouver, BC" />
      </Section>

      <Rule />

      {/* Selected Commissions */}
      <Section label="Selected Commissions">
        <Entry year="2026" text="Florence Landscape, private collection, White City, SK" />
        <Entry year="2026" text="Home Portrait, private collection, Fort Lauderdale, FL" />
        <Entry year="2020" text="Farm Landscape, private collection, Toronto, ON" />
        <Entry year="2008" text="Parental Portraits, private collection, Regina, SK" />
        <Entry year="2007" text="Javan and Judah, private collection, Moose Jaw, SK" />
        <Entry year="2006" text="Johnny Cash, private collection, Edmonton, AB" />
        <Entry year="2004" text="Audrey Hepburn and Johnny Depp, private collection, Regina, SK" />
      </Section>

      <Rule />

      {/* Collections */}
      <Section label="Collections">
        <Text style={styles.simpleEntry}>
          Private collections across Canada and the United States
        </Text>
      </Section>

      <Rule />

      {/* Press */}
      <Section label="Press">
        <Entry year="2015" text={`"Fashion & Art Converge at Lüt," Vancouver Is Awesome`} />
      </Section>
    </Page>
  </Document>
);

// ── Generate ──────────────────────────────────────────────

const outputPath = path.join(process.cwd(), "public", "michelle-wilson-cv.pdf");

renderToFile(<CVDocument />, outputPath)
  .then(() => console.log(`CV saved to public/michelle-wilson-cv.pdf`))
  .catch((err: Error) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
