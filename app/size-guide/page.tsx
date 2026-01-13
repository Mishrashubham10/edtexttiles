'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function SizeGuidePage() {
  const womensTops = [
    { size: 'XS', uk: '6', us: '2', eu: '34', bust: '31-32', waist: '24-25' },
    { size: 'S', uk: '8', us: '4', eu: '36', bust: '33-34', waist: '26-27' },
    { size: 'M', uk: '10', us: '6', eu: '38', bust: '35-36', waist: '28-29' },
    { size: 'L', uk: '12', us: '8', eu: '40', bust: '37-38', waist: '30-31' },
    { size: 'XL', uk: '14', us: '10', eu: '42', bust: '39-41', waist: '32-34' },
    {
      size: 'XXL',
      uk: '16',
      us: '12',
      eu: '44',
      bust: '42-44',
      waist: '35-37',
    },
  ];

  const womensBottoms = [
    { size: 'XS', uk: '6', us: '2', eu: '34', waist: '24-25', hip: '34-35' },
    { size: 'S', uk: '8', us: '4', eu: '36', waist: '26-27', hip: '36-37' },
    { size: 'M', uk: '10', us: '6', eu: '38', waist: '28-29', hip: '38-39' },
    { size: 'L', uk: '12', us: '8', eu: '40', waist: '30-31', hip: '40-41' },
    { size: 'XL', uk: '14', us: '10', eu: '42', waist: '32-34', hip: '42-44' },
    { size: 'XXL', uk: '16', us: '12', eu: '44', waist: '35-37', hip: '45-47' },
  ];

  const mensTops = [
    {
      size: 'XS',
      uk: '34',
      us: '34',
      eu: '44',
      chest: '34-35',
      waist: '28-29',
    },
    { size: 'S', uk: '36', us: '36', eu: '46', chest: '36-37', waist: '30-31' },
    {
      size: 'M',
      uk: '38-40',
      us: '38-40',
      eu: '48-50',
      chest: '38-40',
      waist: '32-34',
    },
    {
      size: 'L',
      uk: '42-44',
      us: '42-44',
      eu: '52-54',
      chest: '42-44',
      waist: '36-38',
    },
    {
      size: 'XL',
      uk: '46-48',
      us: '46-48',
      eu: '56-58',
      chest: '46-48',
      waist: '40-42',
    },
    {
      size: 'XXL',
      uk: '50-52',
      us: '50-52',
      eu: '60-62',
      chest: '50-52',
      waist: '44-46',
    },
  ];

  const mensBottoms = [
    { size: 'XS', uk: '28', us: '28', eu: '44', waist: '28-29', hip: '34-35' },
    { size: 'S', uk: '30', us: '30', eu: '46', waist: '30-31', hip: '36-37' },
    {
      size: 'M',
      uk: '32-34',
      us: '32-34',
      eu: '48-50',
      waist: '32-34',
      hip: '38-40',
    },
    {
      size: 'L',
      uk: '36-38',
      us: '36-38',
      eu: '52-54',
      waist: '36-38',
      hip: '42-44',
    },
    {
      size: 'XL',
      uk: '40-42',
      us: '40-42',
      eu: '56-58',
      waist: '40-42',
      hip: '46-48',
    },
    {
      size: 'XXL',
      uk: '44-46',
      us: '44-46',
      eu: '60-62',
      waist: '44-46',
      hip: '50-52',
    },
  ];

  return (
    <>
      {/* ============ HERO SECTION ========== */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display text-primary mb-4"
          >
            Size Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Find your perfect fit with our comprehensive size guide. All
            measurements are in inches.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* How to Measure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display text-primary mb-6">
              How to Measure
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Bust / Chest
                </h3>
                <p className="text-sm text-muted-foreground">
                  Measure around the fullest part of your bust/chest, keeping
                  the tape horizontal.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">Waist</h3>
                <p className="text-sm text-muted-foreground">
                  Measure around your natural waistline, the narrowest part of
                  your waist.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">Hip</h3>
                <p className="text-sm text-muted-foreground">
                  Measure around the fullest part of your hips, approximately 8
                  inches below your waist.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Size Charts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Tabs defaultValue="women" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="women">Women</TabsTrigger>
                <TabsTrigger value="men">Men</TabsTrigger>
              </TabsList>

              <TabsContent value="women" className="space-y-8">
                <div>
                  <h3 className="text-xl font-display text-primary mb-4">
                    Tops & Dresses
                  </h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/50">
                          <TableHead>Size</TableHead>
                          <TableHead>UK</TableHead>
                          <TableHead>US</TableHead>
                          <TableHead>EU</TableHead>
                          <TableHead>Bust (in)</TableHead>
                          <TableHead>Waist (in)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {womensTops.map((row) => (
                          <TableRow key={row.size}>
                            <TableCell className="font-medium">
                              {row.size}
                            </TableCell>
                            <TableCell>{row.uk}</TableCell>
                            <TableCell>{row.us}</TableCell>
                            <TableCell>{row.eu}</TableCell>
                            <TableCell>{row.bust}</TableCell>
                            <TableCell>{row.waist}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display text-primary mb-4">
                    Bottoms
                  </h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/50">
                          <TableHead>Size</TableHead>
                          <TableHead>UK</TableHead>
                          <TableHead>US</TableHead>
                          <TableHead>EU</TableHead>
                          <TableHead>Waist (in)</TableHead>
                          <TableHead>Hip (in)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {womensBottoms.map((row) => (
                          <TableRow key={row.size}>
                            <TableCell className="font-medium">
                              {row.size}
                            </TableCell>
                            <TableCell>{row.uk}</TableCell>
                            <TableCell>{row.us}</TableCell>
                            <TableCell>{row.eu}</TableCell>
                            <TableCell>{row.waist}</TableCell>
                            <TableCell>{row.hip}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="men" className="space-y-8">
                <div>
                  <h3 className="text-xl font-display text-primary mb-4">
                    Tops & Shirts
                  </h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/50">
                          <TableHead>Size</TableHead>
                          <TableHead>UK</TableHead>
                          <TableHead>US</TableHead>
                          <TableHead>EU</TableHead>
                          <TableHead>Chest (in)</TableHead>
                          <TableHead>Waist (in)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mensTops.map((row) => (
                          <TableRow key={row.size}>
                            <TableCell className="font-medium">
                              {row.size}
                            </TableCell>
                            <TableCell>{row.uk}</TableCell>
                            <TableCell>{row.us}</TableCell>
                            <TableCell>{row.eu}</TableCell>
                            <TableCell>{row.chest}</TableCell>
                            <TableCell>{row.waist}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display text-primary mb-4">
                    Trousers
                  </h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/50">
                          <TableHead>Size</TableHead>
                          <TableHead>UK</TableHead>
                          <TableHead>US</TableHead>
                          <TableHead>EU</TableHead>
                          <TableHead>Waist (in)</TableHead>
                          <TableHead>Hip (in)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mensBottoms.map((row) => (
                          <TableRow key={row.size}>
                            <TableCell className="font-medium">
                              {row.size}
                            </TableCell>
                            <TableCell>{row.uk}</TableCell>
                            <TableCell>{row.us}</TableCell>
                            <TableCell>{row.eu}</TableCell>
                            <TableCell>{row.waist}</TableCell>
                            <TableCell>{row.hip}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-6"
          >
            <h3 className="text-lg font-display text-primary mb-4">
              Fitting Tips
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                If you&apos;re between sizes, we recommend sizing up for a more
                comfortable fit.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                For a relaxed fit, consider ordering one size larger than your
                measurements suggest.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                Our garments are designed with generous ease for comfort. Check
                individual product descriptions for specific fit details.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                If you have any questions about sizing, please contact our
                customer service team.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};