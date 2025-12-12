import type { Project } from '../types';

/**
 * Generates 3 consolidated bullet points from project features
 * that highlight key technical aspects recruiters look for
 */
export function getConsolidatedFeatures(project: Project): string[] {
  const features = project.features.join(' ').toLowerCase();
  const bullets: string[] = [];

  // Extract key technical buzzwords and concepts
  const hasFullStack = /full.?stack|full.?stack|backend|frontend|api|server|client/i.test(features);
  const hasDatabase = /database|postgresql|sql|mongodb|supabase|data storage/i.test(features);
  const hasAuth = /authentication|auth|nextauth|security|oauth|jwt/i.test(features);
  const hasPayment = /payment|stripe|checkout|e.?commerce|transaction/i.test(features);
  const hasML = /machine learning|ml|ai|predictive|neural|model|clustering|regression/i.test(features);
  const hasRealTime = /real.?time|real.?time|live|websocket|socket|streaming/i.test(features);
  const hasCloud = /cloud|deployment|vercel|railway|aws|azure|docker|container/i.test(features);
  const hasTesting = /test|tdd|jest|testing|qa|quality assurance/i.test(features);
  const hasAnalytics = /analytics|monitoring|sentry|tracking|metrics|dashboard/i.test(features);
  const hasMobile = /mobile|react native|expo|ios|android|native/i.test(features);
  const hasGeospatial = /geospatial|mapping|leaflet|map|gis|coordinates/i.test(features);
  const hasAPI = /api|rest|graphql|endpoint|microservice/i.test(features);
  const hasOptimization = /optimization|performance|caching|scalable|scalability/i.test(features);

  // Build bullet points based on project type and features
  if (project.id === 'vendetta-roasting') {
    bullets.push('Full-stack e-commerce platform with Next.js, TypeScript, and PostgreSQL');
    bullets.push('Secure payment processing with Stripe, authentication, and admin analytics dashboard');
    bullets.push('Production-ready with 200+ test cases, error monitoring, and performance optimization');
  } else if (project.id === 'seattle-wayfare') {
    bullets.push('React Native mobile app with predictive analytics and machine learning algorithms');
    bullets.push('Real-time transit tracking with 80% API call reduction through intelligent caching');
    bullets.push('Offline-first architecture with AsyncStorage and background monitoring capabilities');
  } else if (project.id === 'urban-intellect') {
    bullets.push('Full-stack web application with interactive geospatial mapping and data visualization');
    bullets.push('AI-powered recommendation engine with natural language processing and chatbot interface');
    bullets.push('Multi-source data integration (NASA, Copernicus, WorldPop) with real-time filtering');
  } else if (project.id === 'seattle-data-prep') {
    bullets.push('Python FastAPI backend with machine learning models (K-Means, regression, classification)');
    bullets.push('REST API with conversational AI chatbot using NLP, intent classification, and TF-IDF');
    bullets.push('Data processing pipeline with geospatial analysis, Docker deployment, and model evaluation');
  } else {
    // Generic fallback - extract most important aspects
    if (hasFullStack || hasAPI) {
      bullets.push('Full-stack development with REST API integration');
    }
    if (hasDatabase) {
      bullets.push('Database design and data management');
    }
    if (hasML || hasRealTime || hasAnalytics) {
      bullets.push('Advanced features: ' + [
        hasML && 'Machine Learning',
        hasRealTime && 'Real-time processing',
        hasAnalytics && 'Analytics & Monitoring'
      ].filter(Boolean).join(', '));
    }
  }

  // Ensure we always have 3 bullets
  while (bullets.length < 3) {
    bullets.push('Built with modern technologies and best practices');
  }

  return bullets.slice(0, 3);
}

