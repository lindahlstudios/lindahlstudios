import { ImageResponse } from '@vercel/og';

async function loadGoogleFont(font: string, text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }
  throw new Error(`Failed to load font: ${font}`);
}

export async function GET() {
  // Collect all text that needs rendering to optimize font loading
  const serifText = 'Lindahl Studios Shopify development with an operator\u2019s eye.';
  const sansText =
    'BOUTIQUE SHOPIFY DEVELOPMENT STUDIO \u00b7 US-BASED Custom builds, CRO-focused UI/UX, and ecommerce strategy grounded in more than a decade of experience. TRUSTED BY Aviator Nation \u00b7 Sunday Golf \u00b7 Paravel \u00b7 Rainier Watch \u00b7 Revolution Fibers lindahlstudios.com';

  const [instrumentSerif, plusJakartaSans] = await Promise.all([
    loadGoogleFont('Instrument Serif', serifText),
    loadGoogleFont('Plus Jakarta Sans:wght@400;600;700', sansText),
  ]);

  const html = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F5F0E8',
        padding: '60px 80px',
        fontFamily: '"Plus Jakarta Sans"',
        position: 'relative',
      },
      children: [
        // Top accent bar
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: '#2D5F4A',
            },
          },
        },
        // Bottom accent bar
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: '#2D5F4A',
            },
          },
        },
        // Decorative circle
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '140px',
              right: '60px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              backgroundColor: '#E8F0EB',
              opacity: 0.6,
            },
          },
        },
        // Wordmark
        {
          type: 'div',
          props: {
            style: {
              fontFamily: '"Instrument Serif"',
              fontSize: '26px',
              color: '#1A1A1A',
              marginBottom: '60px',
            },
            children: 'Lindahl Studios',
          },
        },
        // Eyebrow
        {
          type: 'div',
          props: {
            style: {
              fontSize: '12px',
              fontWeight: 700,
              color: '#2D5F4A',
              letterSpacing: '1px',
              marginBottom: '16px',
            },
            children: 'BOUTIQUE SHOPIFY DEVELOPMENT STUDIO  \u00b7  US-BASED',
          },
        },
        // Headline
        {
          type: 'div',
          props: {
            style: {
              fontFamily: '"Instrument Serif"',
              fontSize: '52px',
              color: '#1A1A1A',
              lineHeight: 1.1,
              maxWidth: '700px',
              marginBottom: '12px',
            },
            children: 'Shopify development',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontFamily: '"Instrument Serif"',
              fontSize: '52px',
              color: '#1A1A1A',
              lineHeight: 1.1,
              maxWidth: '700px',
              marginBottom: '20px',
            },
            children: 'with an operator\u2019s eye.',
          },
        },
        // Accent line
        {
          type: 'div',
          props: {
            style: {
              width: '48px',
              height: '3px',
              backgroundColor: '#2D5F4A',
              marginBottom: '20px',
            },
          },
        },
        // Body
        {
          type: 'div',
          props: {
            style: {
              fontSize: '17px',
              color: '#666666',
              lineHeight: 1.5,
              maxWidth: '650px',
              marginBottom: '8px',
            },
            children:
              'Custom builds, CRO-focused UI/UX, and ecommerce strategy',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: '17px',
              color: '#666666',
              lineHeight: 1.5,
              marginBottom: 'auto',
            },
            children: 'grounded in more than a decade of experience.',
          },
        },
        // Bottom section
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
            },
            children: [
              // Trusted by
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#999999',
                          letterSpacing: '1px',
                        },
                        children: 'TRUSTED BY',
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '13px',
                          color: '#999999',
                        },
                        children:
                          'Aviator Nation  \u00b7  Sunday Golf  \u00b7  Paravel  \u00b7  Rainier Watch  \u00b7  Revolution Fibers',
                      },
                    },
                  ],
                },
              },
              // URL
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '13px',
                    color: '#999999',
                  },
                  children: 'lindahlstudios.com',
                },
              },
            ],
          },
        },
      ],
    },
  };

  return new ImageResponse(html as any, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Instrument Serif',
        data: instrumentSerif,
        weight: 400 as const,
        style: 'normal' as const,
      },
      {
        name: 'Plus Jakarta Sans',
        data: plusJakartaSans,
        weight: 400 as const,
        style: 'normal' as const,
      },
    ],
  });
}
