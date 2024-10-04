interface OptionData {
    strike: number;
    percent_in_out_money: number;
    percent_max_risk: number;
    percent_cost_to_insure: number;
    sigma_break_even: number;
    percent_to_dbl: number;
    prob_above: number;
    opt_mid_price: number;
    percent_ask_time_value: number;
    delta: number;
    opt_open_int: number;
    black_scholes_ratio_siv: number;
    black_scholes_ratio_50_day: number;
    iv_hv: number;
    percent_bid_ask_spread: number;
    percent_return_1_sigma_max_risk: number;
    subRows: OptionData[];
}


export const tableData: OptionData[] = [
    {
      "strike": 218.7,
      "percent_in_out_money": 17,
      "percent_max_risk": 1.8,
      "percent_cost_to_insure": 4.4,
      "sigma_break_even": 5.17,
      "percent_to_dbl": 8,
      "prob_above": 31.8,
      "opt_mid_price": 18.91,
      "percent_ask_time_value": 0.21,
      "delta": -1.11,
      "opt_open_int": 12111,
      "black_scholes_ratio_siv": 1.64,
      "black_scholes_ratio_50_day": 0.99,
      "iv_hv": 0.7,
      "percent_bid_ask_spread": 14.7,
      "percent_return_1_sigma_max_risk": 1.97,
      "subRows": [
        {
            "strike": 214.5,
            "percent_in_out_money": -3.1,
            "percent_max_risk": 1.5,
            "percent_cost_to_insure": 0.5,
            "sigma_break_even": 3.24,
            "percent_to_dbl": 4,
            "prob_above": 24.4,
            "opt_mid_price": 1.94,
            "percent_ask_time_value": 0.76,
            "delta": -1,
            "opt_open_int": 22336,
            "black_scholes_ratio_siv": 3.03,
            "black_scholes_ratio_50_day": 0.88,
            "iv_hv": 1.04,
            "percent_bid_ask_spread": 38.4,
            "percent_return_1_sigma_max_risk": 0.21,
            "subRows": []
          }
      ]
    },
    
    {
      "strike": 239,
      "percent_in_out_money": 11.9,
      "percent_max_risk": 0.9,
      "percent_cost_to_insure": 9,
      "sigma_break_even": 2.98,
      "percent_to_dbl": 3,
      "prob_above": 31.2,
      "opt_mid_price": 19.69,
      "percent_ask_time_value": 0.63,
      "delta": -0.25,
      "opt_open_int": 26361,
      "black_scholes_ratio_siv": 2.04,
      "black_scholes_ratio_50_day": 1.62,
      "iv_hv": 1.9,
      "percent_bid_ask_spread": 32,
      "percent_return_1_sigma_max_risk": 3.74,
      "subRows": [
        {
            "strike": 243.9,
            "percent_in_out_money": 18.7,
            "percent_max_risk": 0.8,
            "percent_cost_to_insure": 2.8,
            "sigma_break_even": 0.53,
            "percent_to_dbl": 1,
            "prob_above": 84.9,
            "opt_mid_price": 3.04,
            "percent_ask_time_value": 1.97,
            "delta": -1.21,
            "opt_open_int": 17683,
            "black_scholes_ratio_siv": 2.78,
            "black_scholes_ratio_50_day": 1.01,
            "iv_hv": 1.53,
            "percent_bid_ask_spread": 26.3,
            "percent_return_1_sigma_max_risk": 9.71,
            "subRows": []
          }
      ]
    },
    {
      "strike": 225.2,
      "percent_in_out_money": 1.3,
      "percent_max_risk": 0.6,
      "percent_cost_to_insure": 0.7,
      "sigma_break_even": 3.4,
      "percent_to_dbl": 5,
      "prob_above": 40,
      "opt_mid_price": 1.47,
      "percent_ask_time_value": 1.23,
      "delta": -0.31,
      "opt_open_int": 9552,
      "black_scholes_ratio_siv": 3.37,
      "black_scholes_ratio_50_day": 1.29,
      "iv_hv": 1.76,
      "percent_bid_ask_spread": 24.4,
      "percent_return_1_sigma_max_risk": 6.42,
      "subRows": [
        {
            "strike": 216.7,
            "percent_in_out_money": 8.7,
            "percent_max_risk": 1,
            "percent_cost_to_insure": 3.4,
            "sigma_break_even": 5.61,
            "percent_to_dbl": 7,
            "prob_above": 13.9,
            "opt_mid_price": 2.43,
            "percent_ask_time_value": 1.43,
            "delta": -0.8,
            "opt_open_int": 22230,
            "black_scholes_ratio_siv": 3.13,
            "black_scholes_ratio_50_day": 0.56,
            "iv_hv": 1.28,
            "percent_bid_ask_spread": 29.9,
            "percent_return_1_sigma_max_risk": 8.7,
            "subRows": []
          },
      ]
    },
    
    {
      "strike": 220.9,
      "percent_in_out_money": 15.7,
      "percent_max_risk": 1.5,
      "percent_cost_to_insure": 4.8,
      "sigma_break_even": 5.2,
      "percent_to_dbl": 3,
      "prob_above": 35,
      "opt_mid_price": 8.52,
      "percent_ask_time_value": 1.31,
      "delta": -0.41,
      "opt_open_int": 16019,
      "black_scholes_ratio_siv": 1.8,
      "black_scholes_ratio_50_day": 1.84,
      "iv_hv": 1.27,
      "percent_bid_ask_spread": 25.5,
      "percent_return_1_sigma_max_risk": 6.11,
      "subRows": [
        {
            "strike": 243.3,
            "percent_in_out_money": 7.9,
            "percent_max_risk": 1.6,
            "percent_cost_to_insure": 0.6,
            "sigma_break_even": 1.24,
            "percent_to_dbl": 5,
            "prob_above": 97.5,
            "opt_mid_price": 2.85,
            "percent_ask_time_value": 0.65,
            "delta": -0.48,
            "opt_open_int": 19078,
            "black_scholes_ratio_siv": 2.38,
            "black_scholes_ratio_50_day": 0.8,
            "iv_hv": 1.24,
            "percent_bid_ask_spread": 10.3,
            "percent_return_1_sigma_max_risk": 1.76,
            "subRows": []
          },
      ]
    }
]