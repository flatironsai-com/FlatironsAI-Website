import type { Metadata } from 'next'
import React from 'react'

import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Flatirons AI collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-ink-950 py-14 lg:py-20">
        <Container>
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-glow-400 uppercase">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-ink-300">Effective date: August 1, 2024</p>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="prose-flatirons max-w-3xl">
            <p>
              Flatirons AI, LLC (“Flatirons AI,” “we,” “us,” or “our”) respects your privacy. This
              policy describes the information we collect through our website, how we use it, and
              the choices you have.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you contact us, request a demo, or apply to our testing program, we collect
              contact information such as your name, email address, phone number, and company
              name, along with any message you choose to send. We also automatically collect
              certain technical data, such as your IP address and browser information, to keep the
              site secure and understand how it is used.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your inquiries and provide you with requested information.</li>
              <li>To send newsletters and product updates, if you have opted in to receive them.</li>
              <li>To improve our website and services.</li>
              <li>To detect and prevent fraud and abuse.</li>
            </ul>

            <h2>How we share information</h2>
            <p>
              We may share information with service providers who perform services on our behalf —
              such as hosting providers, email service providers, and analytics providers — as
              well as with our affiliates, and with other parties where required by law. We do not
              sell your personal information.
            </p>

            <h2>Your choices</h2>
            <p>
              You may opt out of receiving marketing communications from us at any time by
              following the unsubscribe instructions provided in the email. You may also request
              access to, correction of, or deletion of the personal information we hold about you
              by contacting us through the form on our website.
            </p>

            <h2>Security</h2>
            <p>
              We employ administrative, technical, and physical safeguards designed to protect
              your information. However, no data transmission over the internet or method of
              electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>International transfers</h2>
            <p>
              Our servers are located in the United States. If you access our website from outside
              the United States, your information may be transferred to, stored, and processed in
              the United States.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We will post any changes on this page
              with an updated effective date.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please reach
              out through the <a href="/contact">contact form</a> on our website.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
