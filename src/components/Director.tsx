import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

export default function Director() {
  return (
    <section id="director" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="ctn">
        <SectionTitle
          eyebrow="Leadership"
          title={
            <>
              Meet Our{" "}
              <span className="text-gold-gradient italic">Director</span>
            </>
          }
          description="The vision behind Hire Horizon Group and our commitment towards building successful banking careers."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gold-500/10 blur-3xl" />

            <img
              src="/director.jpeg"
              alt="Director"
              className="rounded-[32px] shadow-2xl w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-navy-950 text-white rounded-2xl px-6 py-5 shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="text-gold-400" />

                <div>
                  <p className="text-3xl font-bold">14+</p>

                  <p className="text-sm text-white/70">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold-600 uppercase tracking-[3px] text-sm font-semibold">
              Director's Message
            </span>

            <h2 className="font-display text-5xl mt-3 text-navy-950 leading-tight">
              Guiding Talent,
              <br />
              Building Banking Careers.
            </h2>
            <p className="mt-6 text-lg text-navy-700 leading-8">
              <strong>Welcome to Hire Horizon Group.</strong>
              <br />
              <br />
              At Hire Horizon Group, we believe that the right opportunity has
              the power to transform lives. Our mission is to bridge the gap
              between talented job seekers and leading organizations by
              providing reliable, transparent, and result-oriented recruitment
              solutions.
              <br />
              <br />
              Since our inception, our focus has been on building long-term
              relationships based on trust, integrity, and excellence. We
              understand that every candidate has unique aspirations and every
              organization has unique hiring needs. That's why our team works
              with dedication to ensure the right talent meets the right
              opportunity.
              <br />
              <br />
              We are committed to maintaining the highest standards of
              professionalism while delivering quality services to both our
              candidates and corporate partners. Our success is measured not
              only by successful placements but also by the confidence and
              satisfaction of the people who choose to work with us.
              <br />
              <br />
              As Director of Hire Horizon Group, I sincerely thank our clients,
              partners, and candidates for their continued trust and support. We
              remain dedicated to creating meaningful career opportunities and
              helping organizations build strong, future-ready teams.
              <br />
              <br />
              Together, let's build successful careers and stronger businesses.
            </p>


            <div className="mt-8">
              <h3 className="font-display text-2xl font-bold text-navy-950">
                Mr. Ankit Kushwaha
              </h3>

              <p className="text-gold-600 mt-2">Director Hire Horizon Group</p>

              <img src="/signature.png" alt="" className="w-40 mt-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
