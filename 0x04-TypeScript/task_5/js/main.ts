/**
 * @interface MajorCredits
 * Defines the structure for major course credits.
 * It includes a 'credits' number and a unique 'brand' literal type
 * to differentiate it from other credit types at the type level.
 */
export interface MajorCredits {
    credits: number;
    brand: "MajorCredits"; // Unique literal type for branding
  }
  
  /**
   * @interface MinorCredits
   * Defines the structure for minor course credits.
   * Similar to MajorCredits, it has a 'credits' number and a distinct 'brand' literal type.
   */
  export interface MinorCredits {
    credits: number;
    brand: "MinorCredits"; // Unique literal type for branding
  }
  
  /**
   * @function sumMajorCredits
   * Calculates the sum of credits for two major subjects.
   *
   * @param subject1 - The first major subject's credits.
   * @param subject2 - The second major subject's credits.
   * @returns A MajorCredits object with the sum of credits.
   */
  export function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
  ): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits", // Ensure the returned object is branded correctly
    };
  }
  
  /**
   * @function sumMinorCredits
   * Calculates the sum of credits for two minor subjects.
   *
   * @param subject1 - The first minor subject's credits.
   * @param subject2 - The second minor subject's credits.
   * @returns A MinorCredits object with the sum of credits.
   */
  export function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
  ): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits", // Ensure the returned object is branded correctly
    };
  }