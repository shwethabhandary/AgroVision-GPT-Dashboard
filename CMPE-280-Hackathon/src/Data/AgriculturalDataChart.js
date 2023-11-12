import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [
  ["Year", "China", "Egypt, Arab Rep", "India", "Saudi Arabia", "USA"],
  [1960.0, 0, 0, 0, 0, 0],
  [1961.0, 1.400000005, 0, 0.084207443, 0, 0],
  [1962.0, 4.499999996, -0.567901235, -1.989098824, 0, 0],
  [1963.0, 11.3, -7.375217283, 2.339252223, 0, 0],
  [1964.0, 12.90000001, 14.31635389, 9.224274695, 0, 0],
  [1965.0, 9.699999996, 6.214821764, -11.04219709, 0, 0],
  [1966.0, 7.200000006, 5.321262972, -1.422579222, 0, 0],
  [1967.0, 1.899999995, 1.761006289, 14.87087224, 0, 0],
  [1968.0, -1.599999991, -4.511742892, -0.158278985, 0, 0],
  [1969.0, 0.799999989, 1.510248112, 6.427516143, 5.656760349, 0],
  [1970.0, 7.700000007, 2.019128587, 7.092165395, -0.314584302, 0],
  [1971.0, 1.900000001, 2.40366122, -1.877366735, 3.909520063, 0],
  [1972.0, -0.900000006, -1.347324783, -5.018479761, 5.616484821, 0],
  [1973.0, 8.999999999, 3.952724885, 7.201906548, 5.695752938, 0],
  [1974.0, 4.099999999, 3.006568974, -1.523356925, 5.957498252, 0],
  [1975.0, 2.000000009, 0.245278391, 12.88978365, 6.449367831, 0],
  [1976.0, -1.800000006, 6.144968563, -5.77818282, 7.434462538, 0],
  [1977.0, -2.200000003, 2.02983448, 10.03625382, 54.04722852, 0],
  [1978.0, -1.113120876, -3.384738634, 2.302506766, -11.63105469, 0],
  [1979.0, 6.13443148, 5.583195135, -12.77469046, -12.39441836, 0],
  [1980.0, -1.482469645, 4.188481675, 12.88822533, 12.80034513, 0],
  [1981.0, 6.982534407, 3.496702581, 4.601673301, 4.834215587, 0],
  [1982.0, 11.52882427, 0.141563447, -0.280834935, 7.605344296, 0],
  [1983.0, 8.32589347, 4.027758765, 10.12097408, 8.691499522, 0],
  [1984.0, 12.88061345, 1.283000247, 1.585092367, 18.93673111, 0],
  [1985.0, 1.843879446, 4.019488429, 0.314273271, 17.95345401, 0],
  [1986.0, 3.318687285, 2.107728337, -0.409484449, 15.03288443, 0],
  [1987.0, 4.704184691, 4.128440367, -1.587796598, 16.38987204, 0],
  [1988.0, 2.543933095, 3.414096916, 15.63964748, 10.78362573, 0],
  [1989.0, 3.074999733, 3.619824097, 1.189154743, 7.010135135, 0],
  [1990.0, 7.327732141, 2.920683402, 4.015095805, 2.801894238, 0],
  [1991.0, 2.353530192, 2.772883199, -1.952488235, 2.885020113, 0],
  [1992.0, 4.651003019, 2.445407002, 6.651006784, 6.01716777, 0],
  [1993.0, 4.649179411, 1.955430316, 3.322706831, 3.509170101, 0],
  [1994.0, 3.945545735, 2.490774917, 4.715980136, -2.291937323, 0],
  [1995.0, 4.942642538, 3.834383385, -0.695377068, 0.992032826, 0],
  [1996.0, 5.0398939, 2.899618621, 9.92029924, -0.324659987, 0],
  [1997.0, 3.436640445, 3.070637296, -2.553727839, 3.037428592, 0],
  [1998.0, 3.432994566, 3.432774775, 6.320454459, 0.965476804, 2.657256505],
  [1999.0, 2.731373302, 4.83023735, 2.669127344, 2.277281406, 12.33213547],
  [2000.0, 2.328518037, 3.701172944, -0.007618146, 3.90901538, 13.80658464],
  [2001.0, 2.638071238, 3.799692565, 6.00708957, 0.564784407, -3.776841609],
  [2002.0, 2.699946552, 3.600498464, -6.604234507, 1.283594629, -6.30633842],
  [2003.0, 2.37205637, 3.480100788, 9.048581158, 0.815215472, 9.685001826],
  [2004.0, 6.105019968, 2.759423367, 0.183532765, 3.584239177, 4.334518021],
  [2005.0, 5.073914398, 3.256158613, 4.809364049, 1.059525009, 12.15814168],
  [2006.0, 4.755278298, 3.248658106, 2.938795485, 1.009886154, -5.304684651],
  [2007.0, 3.523649902, 3.68036877, 5.506476634, 1.948511336, -14.41260009],
  [2008.0, 5.156004666, 3.34757001, -0.24419426, 1.328996263, -0.172313356],
  [2009.0, 4.002425781, 3.170501968, -0.880233005, 1.031268815, 12.02950851],
  [2010.0, 4.251069686, 3.474480676, 8.791758288, 10.02386591, -2.669932793],
  [2011.0, 4.174289253, 2.721961346, 6.397806254, 4.334555624, -6.510451366],
  [2012.0, 4.466541956, 2.919345874, 1.487460494, 2.805480438, -3.786491961],
  [2013.0, 3.807199829, 3.002410149, 5.570475656, 3.281518951, 16.17881002],
  [2014.0, 4.050468237, 3.006380459, -0.216448191, 2.494273216, 1.39813772],
  [2015.0, 3.898521466, 3.071406711, 0.649599312, 0.610068327, 7.682638257],
  [2016.0, 3.277813557, 3.096859256, 6.797558631, 0.633552781, 6.920067091],
  [2017.0, 3.961291, 3.241190991, 6.605921519, 0.498407455, -2.602345108],
  [2018.0, 3.4829175, 3.114949237, 2.560951552, 0.323036758, 4.978755744],
  [2019.0, 3.085553092, 3.346970717, 4.314766319, 1.30744998, 5.3839676],
  [2020.0, 3.0, 3.30050138, 3.033525287, -1.70831043, 0],
];
export function AgriculturalDataChart(props) {
  const [chartData, setchartData] = useState([]);
  const range = useSelector((state) => state.countryRange.range);
  const country = useSelector((state) => state.countryRange.country);
  const filterData = () => {
    let filteredData = [["year", country]];
    let col = 0;
    if (country == "USA") {
      col = 6;
    } else if (country == "INDIA") {
      col = 4;
    } else if (country == "China") {
      col = 1;
    } else {
      setchartData(data);
      return;
    }
    let startYear = range[0];
    let endYear = range[1];
    for (let i = 1; i < data.length; i++) {
      let currYear = data[i][0];
      if (currYear <= endYear && currYear >= startYear) {
        filteredData.push([currYear, data[i][col]]);
      }
    }
    setchartData(filteredData);
  };

  useEffect(() => {
    console.log(range, country);
    filterData();
    console.log(chartData);
  }, [range, country]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="250px"
        data={chartData}
        options={{
          hAxis: {
            format: "#", // Use 'decimal' format to display integers without commas
          },
        }}
      />
    </div>
  );
}