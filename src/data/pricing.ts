import raw from './pricing.json';
import { fillPricing } from './fill-pricing';

// Données tarifaires, {variables} remplacées : à importer partout à la place de pricing.json
const pricing = fillPricing(raw);
export default pricing;
