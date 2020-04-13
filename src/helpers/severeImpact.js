const severeImpactByDaily = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (
        0.15 * (
          data.reportedCases * 50
        ) * (
          2 ** Math.trunc(data.timeToElapse / 3)
        )
      )
    ),
    casesForICUByRequestedTime: Math.trunc(0.05 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    )),
    casesForVentilatorsByRequestedTime: Math.trunc(0.02 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc(data.timeToElapse / 3)
    )),
    dollarsInFlight: Math.trunc(((
      (
        data.reportedCases * 50
      ) * (
        2 ** Math.trunc(data.timeToElapse / 3)
      ) * data.region.avgDailyIncomePopulation
    ) * data.region.avgDailyIncomeInUSD) / data.timeToElapse)
  }
);

const severeImpactByWeekly = (data) => (
  {
    currentlyInfected: severeImpactByDaily(data).currentlyInfected,
    infectionsByRequestedTime: (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (
        0.15 * (
          data.reportedCases * 50
        ) * (
          2 ** Math.trunc((data.timeToElapse * 7) / 3)
        )
      )
    ),
    casesForICUByRequestedTime: Math.trunc(0.05 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    )),
    casesForVentilatorsByRequestedTime: Math.trunc(0.02 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 7) / 3)
    )),
    dollarsInFlight: Math.trunc(((
      (
        data.reportedCases * 50
      ) * (
        2 ** Math.trunc((data.timeToElapse * 7) / 3)
      ) * data.region.avgDailyIncomePopulation
    ) * data.region.avgDailyIncomeInUSD) / (data.timeToElapse * 7))
  }
);

const severeImpactByMonthly = (data) => (
  {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    ),
    severeCasesByRequestedTime: 0.15 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    ),
    hospitalBedsByRequestedTime: Math.trunc(
      (
        0.35 * data.totalHospitalBeds
      ) - (
        0.15 * (
          data.reportedCases * 50
        ) * (
          2 ** Math.trunc((data.timeToElapse * 30) / 3)
        )
      )
    ),
    casesForICUByRequestedTime: Math.trunc(0.05 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    )),
    casesForVentilatorsByRequestedTime: Math.trunc(0.02 * (
      data.reportedCases * 50
    ) * (
      2 ** Math.trunc((data.timeToElapse * 30) / 3)
    )),
    dollarsInFlight: Math.trunc(((
      (
        data.reportedCases * 50
      ) * (
        2 ** Math.trunc((data.timeToElapse * 30) / 3)
      ) * data.region.avgDailyIncomePopulation
    ) * data.region.avgDailyIncomeInUSD) / (data.timeToElapse * 30))
  }
);

export default { severeImpactByDaily, severeImpactByWeekly, severeImpactByMonthly };
