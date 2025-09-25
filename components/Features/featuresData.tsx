import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
      </svg>
    ),
    title: "DeFi Protocols",
    paragraph:
      "Custom decentralized finance solutions including liquidity pools, yield farming, and automated market makers.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
      </svg>
    ),
    title: "Cross-chain Bridges",
    paragraph:
      "Secure and efficient blockchain interoperability solutions connecting multiple networks with optimized gas costs.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9H21Z"/>
      </svg>
    ),
    title: "Asset Tokenization",
    paragraph:
      "Transform real-world assets into blockchain tokens including RWAs, securities, and digital representations.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z"/>
      </svg>
    ),
    title: "AI Analytics",
    paragraph:
      "Advanced machine learning models for predictive analytics, risk assessment, and automated decision-making systems.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M17 9H7V7H17M17 13H7V11H17M14 17H7V15H14M12 3A1 1 0 0 1 13 4A1 1 0 0 1 12 5A1 1 0 0 1 11 4A1 1 0 0 1 12 3M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3Z"/>
      </svg>
    ),
    title: "MEV Optimization",
    paragraph:
      "Maximal Extractable Value strategies and tools for enhanced trading performance and arbitrage opportunities.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10V14.5C14.8 16.9 13.4 18.5 12 18.5C10.6 18.5 9.2 16.9 9.2 14.5V10C9.2 8.6 10.6 7 12 7Z"/>
      </svg>
    ),
    title: "Infrastructure Security",
    paragraph:
      "Enterprise-grade blockchain infrastructure with advanced security protocols and compliance frameworks.",
  },
];
export default featuresData;