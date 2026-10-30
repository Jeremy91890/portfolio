import type { Icon } from '@phosphor-icons/react';
import { Car, ForkKnife, Scissors, Storefront, Wrench } from '@phosphor-icons/react';
import type { SectorId } from '../data/guides';

// Icône de chaque secteur des guides métier (accueil et page Guides)
export const sectorIcons: Record<SectorId, Icon> = {
  alimentation: ForkKnife,
  beaute: Scissors,
  batiment: Wrench,
  boutiques: Storefront,
  automobile: Car,
};
