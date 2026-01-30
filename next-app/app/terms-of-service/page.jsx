import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service',
  description: 'Agile Velocity terms of service. Terms and conditions for using our website and services.',
}

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <span className="section-tag">Legal</span>
          <h1 className="legal-hero-title">Terms of Service</h1>
          <p className="legal-hero-date">Terms and Conditions of Use</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="legal-content-inner">
          <div className="legal-body">
            <div className="legal-notice">
              <p>
                <strong>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE.</strong> By using this Site, you signify your assent to these Terms and Conditions. If you do not agree to all of these Terms and Conditions, do not use this Site.
              </p>
            </div>

            <p>
              These Terms and Conditions of Use are governed by the laws of the State of Texas, without regard to conflict of law provisions.
            </p>

            <h2>1. Site Access and Use</h2>
            <p>
              This website (&quot;Site&quot;) is owned and operated by Agile Velocity, LLC. You may access and use the Site and its contents for your personal use only. No material from Agile Velocity or any website owned, operated, licensed, or controlled by Agile Velocity may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way for any commercial or resale purposes.
            </p>
            <p>
              You may download one copy of the materials on any single computer for your personal, non-commercial home use only, provided you keep intact all copyright and other proprietary notices. Modification of the materials or use of the materials for any other purpose violates Agile Velocity&apos;s intellectual property rights.
            </p>

            <h2>2. Trademarks and Data Restrictions</h2>
            <p>
              All trademarks, service marks, and trade names are proprietary to Agile Velocity or its licensed partners. Any use of content or descriptions; any derivative use of this Site or its contents; and any use of data mining, robots, or similar data gathering and extraction tools is strictly prohibited.
            </p>
            <p>
              Framing any portion of the Site or its contents is expressly prohibited without the prior written consent of Agile Velocity.
            </p>

            <h2>3. Accuracy Disclaimer</h2>
            <p>
              Agile Velocity makes no warranties or representations as to the accuracy of the information contained on this Site and assumes no liability or responsibility for any errors or misrepresentations in Site content.
            </p>

            <h2>4. External Links</h2>
            <p>
              Agile Velocity disclaims all responsibility for content contained on or accessible through third-party websites. External sites are not under the control of Agile Velocity, and the company does not guarantee the accessibility of any third-party website linked from this Site.
            </p>
            <p>
              If you have concerns about content on any third-party website, please direct your inquiries to the administrator of that website.
            </p>

            <h2>5. User-Generated Content</h2>
            <p>
              By posting or submitting content to the Site, you agree to refrain from posting any material that is unlawful, threatening, abusive, defamatory, invasive of privacy, vulgar, obscene, or otherwise objectionable. Agile Velocity reserves the right to remove, edit, or discontinue any user-generated content at its sole discretion without notice or obligation.
            </p>

            <h2>6. Content Licensing and Indemnification</h2>
            <p>
              By submitting content to the Site, you grant Agile Velocity and its affiliates a perpetual, irrevocable, worldwide, royalty-free, non-exclusive, sublicensable right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, display, and otherwise exploit such content in any media now known or hereafter developed.
            </p>
            <p>
              Agile Velocity may sell, repurpose, or transfer user information to third parties for any lawful purpose. You agree to indemnify and hold harmless Agile Velocity and its officers, directors, employees, and agents from any claims arising from content you submit.
            </p>

            <h2>7. Terms Modifications</h2>
            <p>
              Additional terms and conditions may apply to specific areas of this Site. In the event of any conflict between such additional terms and these Terms and Conditions, the additional terms shall govern for that portion of the Site.
            </p>
            <p>
              Agile Velocity may revise these Terms and Conditions at any time without notice. By using this Site, you agree to be bound by the then-current version of these Terms and Conditions.
            </p>

            <h2>8. Harmful Code Prohibition</h2>
            <p>
              You agree not to transmit any software, virus, worm, Trojan horse, or other harmful code designed to damage computer systems, intercept data, or enable unauthorized access. You may not use any information obtained from this Site to exploit, damage, or attempt to gain unauthorized access to any computer systems or networks.
            </p>

            <h2>9. Password Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of any password assigned to you for accessing portions of this Site. Unauthorized use of passwords is strictly prohibited.
            </p>

            <h2>10. Termination</h2>
            <p>
              Agile Velocity reserves the right to terminate your access to this Site at any time, for any reason, without prior notice.
            </p>

            <h2>11. U.S. Government Rights</h2>
            <p>
              Use, duplication, or disclosure by the United States Government is subject to the restrictions set forth in DFARS 252.227-7013(c)(1)(ii) and FAR 52.227-19. All materials on this Site are provided with restricted rights. Use by the Government constitutes acknowledgment of Agile Velocity&apos;s proprietary rights in these materials.
            </p>

            <h2>12. Materials Disclaimer</h2>
            <p className="legal-uppercase">
              THE MATERIALS ON THIS SITE ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, AGILE VELOCITY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p className="legal-uppercase">
              AGILE VELOCITY DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE SITE MATERIALS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2>13. Liability Limitation</h2>
            <p className="legal-uppercase">
              AGILE VELOCITY AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THIS SITE, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, BUSINESS INTERRUPTION, OR LOSS OF DATA, EVEN IF AGILE VELOCITY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              If your use of this Site results in the need for servicing, repair, or correction of equipment or data, you assume all costs thereof.
            </p>

            <h2>14. Arbitration</h2>
            <p>
              Any dispute arising out of or relating to these Terms and Conditions or your use of this Site shall be resolved exclusively through binding arbitration administered by the American Arbitration Association in Austin, Texas, in accordance with its Commercial Arbitration Rules. All proceedings shall be conducted in English.
            </p>
            <p>
              <strong>Class Action Waiver:</strong> You agree that any arbitration shall be conducted on an individual basis only, and you waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
            <p>
              <strong>Opt-Out:</strong> You may opt out of this arbitration provision by providing written notice to Agile Velocity within thirty (30) days of your first use of this Site. Such notice must be mailed to Agile Velocity at the address provided below.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <address>
              Agile Velocity, LLC<br />
              2900 West Anderson Lane, Suite 200, #312<br />
              Austin, Texas 78757<br />
              <a href="mailto:info@agilevelocity.com">info@agilevelocity.com</a>
            </address>
          </div>

          {/* Sidebar */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>Questions?</h3>
              <p>For inquiries about our terms, contact us at:</p>
              <a href="mailto:info@agilevelocity.com" className="legal-sidebar-email">
                <i className="fas fa-envelope"></i>
                info@agilevelocity.com
              </a>
            </div>
            <div className="legal-sidebar-card">
              <h3>Related</h3>
              <Link href="/privacy-policy" className="legal-sidebar-link">
                <i className="fas fa-shield-alt"></i>
                Privacy Policy
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
