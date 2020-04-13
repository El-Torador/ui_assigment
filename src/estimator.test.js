import covid19ImpactEstimator from './estimator';
import impact from './helpers/impact';
import severeImpact from './helpers/severeImpact';

const data = [
  {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  },
  {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'weeks',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  },
  {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'months',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  }
];

describe('test all the possibilities of period estimation', () => {
  it('should return estimation daily', () => {
    expect(covid19ImpactEstimator(data[0]))
      .toStrictEqual(
        {
          data: data[0],
          impact: impact.impactByDaily(data[0]),
          severeImpact: severeImpact.severeImpactByDaily(data[0])
        }
      );
  });
  it('should return estimation weekly', () => {
    expect(covid19ImpactEstimator(data[1]))
      .toStrictEqual(
        {
          data: data[1],
          impact: impact.impactByWeekly(data[1]),
          severeImpact: severeImpact.severeImpactByWeekly(data[1])
        }
      );
  });
  it('should return estimation monthly', () => {
    expect(covid19ImpactEstimator(data[2]))
      .toStrictEqual(
        {
          data: data[2],
          impact: impact.impactByMonthly(data[2]),
          severeImpact: severeImpact.severeImpactByMonthly(data[2])
        }
      );
  });
});
