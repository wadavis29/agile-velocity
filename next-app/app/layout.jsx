import { Inter, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import TopBar from '@/components/layout/TopBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/JsonLd'
import './globals.css'

// Tracking IDs
const GA_MEASUREMENT_ID = 'G-76VDC77N5V'
const GOOGLE_ADS_ID = 'AW-978862327'
const HUBSPOT_ID = '481123'
const RB2B_KEY = 'GOYPYHD8E0OX'

// Optimized font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
  weight: '400',
})

export const metadata = {
  metadataBase: new URL('https://www.agilevelocity.com'),
  title: {
    default: 'Agile Velocity | We Restart Stalled Transformations',
    template: '%s | Agile Velocity',
  },
  description: 'Path to Agility framework guides your transformation from chaos to predictable delivery. 15+ years helping Fortune 500 companies achieve speed, quality, and predictability.',
  keywords: ['enterprise transformation', 'agile transformation', 'Path to Agility', 'business transformation', 'enterprise agility', 'agile coaching'],
  authors: [{ name: 'Agile Velocity' }],
  creator: 'Agile Velocity',
  verification: {
    google: 'c841nvdSvmAqKQ0qobRn23BTyPs7sXZPL-YI_rI8qtY',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.agilevelocity.com',
    siteName: 'Agile Velocity',
    title: 'Agile Velocity | We Restart Stalled Transformations',
    description: 'Path to Agility framework guides your transformation from chaos to predictable delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agile Velocity | We Restart Stalled Transformations',
    description: 'Path to Agility framework guides your transformation from chaos to predictable delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className={inter.className}>
        <TopBar />
        <Nav />
        <main>{children}</main>
        <Footer />

        {/* ========== THIRD-PARTY SCRIPTS ========== */}

        {/* FontAwesome Icons */}
        <Script
          src="https://kit.fontawesome.com/0c6553beb3.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Google Analytics (GA4) + Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        {/* RB2B Visitor Identification */}
        <Script id="rb2b" strategy="afterInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = {loaded: true};
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
            }("${RB2B_KEY}");
          `}
        </Script>

        {/* ClickCease Ad Fraud Protection */}
        <Script id="clickcease" strategy="afterInteractive">
          {`
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = 'https://www.clickcease.com/monitor/stat.js';
            document.head.appendChild(script);
          `}
        </Script>
        <noscript>
          <a href="https://www.clickcease.com" rel="nofollow">
            <img src="https://monitor.clickcease.com" alt="ClickCease" />
          </a>
        </noscript>

        {/* HubSpot Chat Widget */}
        <Script
          id="hs-script-loader"
          src={`//js.hs-scripts.com/${HUBSPOT_ID}.js`}
          strategy="afterInteractive"
        />

        {/* HubSpot Chat Tracking → GA4 */}
        <Script id="hubspot-tracking" strategy="afterInteractive">
          {`
            function setupHubSpotTracking() {
              window.HubSpotConversations.on('contactAssociated', function(payload) {
                gtag('event', 'hubspot_chat', {
                  'event_category': 'hubspot',
                  'event_action': 'contact_associated',
                  'event_label': payload.conversation.conversationId
                });
              });

              window.HubSpotConversations.on('conversationStarted', function(payload) {
                gtag('event', 'hubspot_chat', {
                  'event_category': 'hubspot',
                  'event_action': 'conversation_started',
                  'event_label': payload.conversation.conversationId
                });
              });

              window.HubSpotConversations.on('widgetOpened', function() {
                gtag('event', 'hubspot_chat', {
                  'event_category': 'hubspot',
                  'event_action': 'widget_opened',
                  'event_label': 'chat_widget'
                });
              });
            }

            var attempts = 0;
            function initTracking() {
              if (window.HubSpotConversations && typeof window.HubSpotConversations.on === 'function') {
                setupHubSpotTracking();
              } else if (attempts < 20) {
                attempts++;
                setTimeout(initTracking, 1000);
              }
            }

            if (window.HubSpotConversations) {
              setupHubSpotTracking();
            } else {
              window.hsConversationsOnReady = window.hsConversationsOnReady || [];
              window.hsConversationsOnReady.push(setupHubSpotTracking);
            }

            setTimeout(initTracking, 2000);
          `}
        </Script>

        {/* Phone Click Tracking → GA4 */}
        <Script id="phone-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (link && typeof gtag !== 'undefined') {
                var phoneNumber = link.getAttribute('href').replace('tel:', '');
                gtag('event', 'gt_phone', {
                  'event_category': 'contact',
                  'event_action': 'phone_click',
                  'event_label': phoneNumber
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
