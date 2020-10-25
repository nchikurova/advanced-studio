
# Data Manipulation

### [12 Useful Pandas Techniques in Python for Data Manipulation](https://www.analyticsvidhya.com/blog/2016/01/12-pandas-techniques-python-data-manipulation/)


```python
import numpy as np
import pandas as pd

# dfs = pd.read_excel("housing_week1.xlsx", sheet_name="US")
# print(dfs.head(10))
house_file = pd.read_excel('/Users/nadezdachikurova/Downloads/housing2b_week1.xlsx')

house_file
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Housing Table 2b. Confidence in Ability to Make Next Month's Payment for Renter-Occupied Housing Units, by Select Characteristics: United States</th>
      <th>Unnamed: 1</th>
      <th>Unnamed: 2</th>
      <th>Unnamed: 3</th>
      <th>Unnamed: 4</th>
      <th>Unnamed: 5</th>
      <th>Unnamed: 6</th>
      <th>Unnamed: 7</th>
      <th>Unnamed: 8</th>
      <th>Unnamed: 9</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Source: U.S. Census Bureau Household Pulse Sur...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Total Population 18 Years and Older in Renter-...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Select characteristics</td>
      <td>Total</td>
      <td>Occupied without rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Did not report to tenure</td>
    </tr>
    <tr>
      <th>3</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>No confidence</td>
      <td>Slight confidence</td>
      <td>Moderate confidence</td>
      <td>High confidence</td>
      <td>Payment is/will be deferred</td>
      <td>Did not report</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Total</td>
      <td>75266101</td>
      <td>3798689</td>
      <td>8918242</td>
      <td>12571649</td>
      <td>18070862</td>
      <td>30643777</td>
      <td>938815</td>
      <td>324066</td>
      <td>26676331</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Age</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>7</th>
      <td>18 - 24</td>
      <td>7313446</td>
      <td>286454</td>
      <td>639268</td>
      <td>1172462</td>
      <td>2366278</td>
      <td>2756071</td>
      <td>72011</td>
      <td>20902</td>
      <td>2625570</td>
    </tr>
    <tr>
      <th>8</th>
      <td>25 - 39</td>
      <td>33959243</td>
      <td>1546625</td>
      <td>4399374</td>
      <td>5968053</td>
      <td>7623589</td>
      <td>13842252</td>
      <td>500551</td>
      <td>78798</td>
      <td>8137828</td>
    </tr>
    <tr>
      <th>9</th>
      <td>40 - 54</td>
      <td>17607031</td>
      <td>969268</td>
      <td>2469898</td>
      <td>3292263</td>
      <td>4272341</td>
      <td>6251731</td>
      <td>282027</td>
      <td>69504</td>
      <td>6160146</td>
    </tr>
    <tr>
      <th>10</th>
      <td>55 - 64</td>
      <td>9157888</td>
      <td>501794</td>
      <td>989617</td>
      <td>1423160</td>
      <td>2213671</td>
      <td>3897265</td>
      <td>51138</td>
      <td>81243</td>
      <td>4476699</td>
    </tr>
    <tr>
      <th>11</th>
      <td>65 and above</td>
      <td>7228493</td>
      <td>494549</td>
      <td>420084</td>
      <td>715712</td>
      <td>1594982</td>
      <td>3896458</td>
      <td>33088</td>
      <td>73620</td>
      <td>5276088</td>
    </tr>
    <tr>
      <th>12</th>
      <td>Sex</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Male</td>
      <td>34772104</td>
      <td>1917582</td>
      <td>4169523</td>
      <td>5147850</td>
      <td>8134709</td>
      <td>14857509</td>
      <td>514882</td>
      <td>30049</td>
      <td>11927883</td>
    </tr>
    <tr>
      <th>14</th>
      <td>Female</td>
      <td>40493997</td>
      <td>1881108</td>
      <td>4748719</td>
      <td>7423800</td>
      <td>9936152</td>
      <td>15786268</td>
      <td>423933</td>
      <td>294018</td>
      <td>14748448</td>
    </tr>
    <tr>
      <th>15</th>
      <td>Hispanic origin and Race</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Hispanic or Latino (may be of any race)</td>
      <td>16075749</td>
      <td>708252</td>
      <td>2723391</td>
      <td>3765786</td>
      <td>4289939</td>
      <td>4383535</td>
      <td>115420</td>
      <td>89427</td>
      <td>5834066</td>
    </tr>
    <tr>
      <th>17</th>
      <td>White alone, not Hispanic</td>
      <td>37772948</td>
      <td>2119711</td>
      <td>3020518</td>
      <td>4193252</td>
      <td>8471643</td>
      <td>19355953</td>
      <td>528322</td>
      <td>83550</td>
      <td>14293951</td>
    </tr>
    <tr>
      <th>18</th>
      <td>Black alone, not Hispanic</td>
      <td>14221712</td>
      <td>650218</td>
      <td>2331905</td>
      <td>3340880</td>
      <td>3580659</td>
      <td>3952208</td>
      <td>220040</td>
      <td>145803</td>
      <td>4084623</td>
    </tr>
    <tr>
      <th>19</th>
      <td>Asian alone, not Hispanic</td>
      <td>3215458</td>
      <td>122829</td>
      <td>308873</td>
      <td>626124</td>
      <td>609280</td>
      <td>1530841</td>
      <td>16760</td>
      <td>751</td>
      <td>1400182</td>
    </tr>
    <tr>
      <th>20</th>
      <td>Two or more races + Other races, not Hispanic</td>
      <td>3980236</td>
      <td>197681</td>
      <td>533556</td>
      <td>645608</td>
      <td>1119341</td>
      <td>1421240</td>
      <td>58273</td>
      <td>4536</td>
      <td>1063508</td>
    </tr>
    <tr>
      <th>21</th>
      <td>Education</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>22</th>
      <td>Less than high school</td>
      <td>7630908</td>
      <td>513201</td>
      <td>1482489</td>
      <td>1871459</td>
      <td>1973579</td>
      <td>1588923</td>
      <td>55419</td>
      <td>145838</td>
      <td>3033298</td>
    </tr>
    <tr>
      <th>23</th>
      <td>High school or GED</td>
      <td>26587535</td>
      <td>1279935</td>
      <td>3706781</td>
      <td>5046450</td>
      <td>6599701</td>
      <td>9522006</td>
      <td>343938</td>
      <td>88723</td>
      <td>10016935</td>
    </tr>
    <tr>
      <th>24</th>
      <td>Some college/associate’s degree</td>
      <td>24354295</td>
      <td>1322092</td>
      <td>2792612</td>
      <td>4232609</td>
      <td>6489522</td>
      <td>9112126</td>
      <td>332959</td>
      <td>72375</td>
      <td>7735679</td>
    </tr>
    <tr>
      <th>25</th>
      <td>Bachelor’s degree or higher</td>
      <td>16693364</td>
      <td>683462</td>
      <td>936360</td>
      <td>1421132</td>
      <td>3008059</td>
      <td>10420722</td>
      <td>206499</td>
      <td>17130</td>
      <td>5890419</td>
    </tr>
    <tr>
      <th>26</th>
      <td>Marital status</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>27</th>
      <td>Married</td>
      <td>25834503</td>
      <td>1177934</td>
      <td>2965813</td>
      <td>3819950</td>
      <td>5805097</td>
      <td>11777371</td>
      <td>219162</td>
      <td>69175</td>
      <td>12803992</td>
    </tr>
    <tr>
      <th>28</th>
      <td>Widowed</td>
      <td>2202944</td>
      <td>129374</td>
      <td>222984</td>
      <td>349965</td>
      <td>382827</td>
      <td>1104429</td>
      <td>12613</td>
      <td>751</td>
      <td>1533592</td>
    </tr>
    <tr>
      <th>29</th>
      <td>Divorced/separated</td>
      <td>15201104</td>
      <td>935960</td>
      <td>1930192</td>
      <td>2694637</td>
      <td>3655383</td>
      <td>5611630</td>
      <td>259105</td>
      <td>114198</td>
      <td>3731480</td>
    </tr>
    <tr>
      <th>30</th>
      <td>Never married</td>
      <td>31865484</td>
      <td>1503222</td>
      <td>3791412</td>
      <td>5677647</td>
      <td>8207982</td>
      <td>12112585</td>
      <td>447936</td>
      <td>124700</td>
      <td>7489643</td>
    </tr>
    <tr>
      <th>31</th>
      <td>Did not report</td>
      <td>162066</td>
      <td>52199</td>
      <td>7842</td>
      <td>29451</td>
      <td>19572</td>
      <td>37762</td>
      <td>-</td>
      <td>15241</td>
      <td>1117623</td>
    </tr>
    <tr>
      <th>32</th>
      <td>Presence of children under 18 years old</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>33</th>
      <td>Children in household</td>
      <td>32906303</td>
      <td>1723646</td>
      <td>5027156</td>
      <td>6777250</td>
      <td>8111053</td>
      <td>10689768</td>
      <td>452199</td>
      <td>125231</td>
      <td>11427501</td>
    </tr>
    <tr>
      <th>34</th>
      <td>No children</td>
      <td>42359798</td>
      <td>2075043</td>
      <td>3891086</td>
      <td>5794399</td>
      <td>9959809</td>
      <td>19954009</td>
      <td>486617</td>
      <td>198836</td>
      <td>15248829</td>
    </tr>
    <tr>
      <th>35</th>
      <td>Respondent or household member experienced los...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>36</th>
      <td>Yes</td>
      <td>41321638</td>
      <td>2021026</td>
      <td>7408049</td>
      <td>9045115</td>
      <td>10963049</td>
      <td>11226544</td>
      <td>492088</td>
      <td>165766</td>
      <td>12672258</td>
    </tr>
    <tr>
      <th>37</th>
      <td>No</td>
      <td>33841565</td>
      <td>1776290</td>
      <td>1510193</td>
      <td>3520496</td>
      <td>7098074</td>
      <td>19333237</td>
      <td>446727</td>
      <td>156548</td>
      <td>12877152</td>
    </tr>
    <tr>
      <th>38</th>
      <td>Did not report</td>
      <td>102898</td>
      <td>1373</td>
      <td>-</td>
      <td>6038</td>
      <td>9738</td>
      <td>83997</td>
      <td>-</td>
      <td>1752</td>
      <td>1126920</td>
    </tr>
    <tr>
      <th>39</th>
      <td>Respondent currently employed</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>40</th>
      <td>Yes</td>
      <td>39313969</td>
      <td>1352887</td>
      <td>3021359</td>
      <td>5671822</td>
      <td>9241154</td>
      <td>19426974</td>
      <td>524342</td>
      <td>75432</td>
      <td>12821000</td>
    </tr>
    <tr>
      <th>41</th>
      <td>No</td>
      <td>35828698</td>
      <td>2443357</td>
      <td>5885026</td>
      <td>6862370</td>
      <td>8827869</td>
      <td>11148719</td>
      <td>414473</td>
      <td>246882</td>
      <td>12471720</td>
    </tr>
    <tr>
      <th>42</th>
      <td>Did not report</td>
      <td>123434</td>
      <td>2445</td>
      <td>11857</td>
      <td>37457</td>
      <td>1838</td>
      <td>68084</td>
      <td>-</td>
      <td>1752</td>
      <td>1383610</td>
    </tr>
    <tr>
      <th>43</th>
      <td>Household income</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>44</th>
      <td>Less than $25,000</td>
      <td>21689403</td>
      <td>1670355</td>
      <td>3674597</td>
      <td>4503163</td>
      <td>5662511</td>
      <td>5753678</td>
      <td>356632</td>
      <td>68466</td>
      <td>154249</td>
    </tr>
    <tr>
      <th>45</th>
      <td>$25,000 - $34,999</td>
      <td>12988376</td>
      <td>783383</td>
      <td>1737369</td>
      <td>2787412</td>
      <td>3398243</td>
      <td>4204783</td>
      <td>77185</td>
      <td>-</td>
      <td>66443</td>
    </tr>
    <tr>
      <th>46</th>
      <td>$35,000 - $49,999</td>
      <td>11602952</td>
      <td>376157</td>
      <td>1545670</td>
      <td>2066892</td>
      <td>3066365</td>
      <td>4479861</td>
      <td>68006</td>
      <td>-</td>
      <td>40117</td>
    </tr>
    <tr>
      <th>47</th>
      <td>$50,000 - $74,999</td>
      <td>11880529</td>
      <td>359512</td>
      <td>1149608</td>
      <td>1853850</td>
      <td>2877970</td>
      <td>5474198</td>
      <td>164259</td>
      <td>1131</td>
      <td>104523</td>
    </tr>
    <tr>
      <th>48</th>
      <td>$75,000 - $99,999</td>
      <td>6442384</td>
      <td>205200</td>
      <td>394303</td>
      <td>711095</td>
      <td>1269592</td>
      <td>3773428</td>
      <td>88765</td>
      <td>-</td>
      <td>33749</td>
    </tr>
    <tr>
      <th>49</th>
      <td>$100,000 - $149,999</td>
      <td>5653816</td>
      <td>188250</td>
      <td>187964</td>
      <td>310039</td>
      <td>1136326</td>
      <td>3678059</td>
      <td>96797</td>
      <td>56380</td>
      <td>22708</td>
    </tr>
    <tr>
      <th>50</th>
      <td>$150,000 - $199,999</td>
      <td>1708519</td>
      <td>51620</td>
      <td>47277</td>
      <td>56030</td>
      <td>204079</td>
      <td>1336142</td>
      <td>13371</td>
      <td>-</td>
      <td>11099</td>
    </tr>
    <tr>
      <th>51</th>
      <td>$200,000 and above</td>
      <td>1467499</td>
      <td>51832</td>
      <td>6968</td>
      <td>26299</td>
      <td>94045</td>
      <td>1260841</td>
      <td>27513</td>
      <td>-</td>
      <td>15879</td>
    </tr>
    <tr>
      <th>52</th>
      <td>Did not report</td>
      <td>1832624</td>
      <td>112379</td>
      <td>174485</td>
      <td>256869</td>
      <td>361729</td>
      <td>682788</td>
      <td>46285</td>
      <td>198089</td>
      <td>26227564</td>
    </tr>
  </tbody>
</table>
</div>




```python
#print(house_file.head(10))
```


```python

```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-158-780c984e9535> in <module>
    ----> 1 df1 = pd.read_excel(house_file, 'AZ')
    

    /Applications/anaconda3/lib/python3.7/site-packages/pandas/util/_decorators.py in wrapper(*args, **kwargs)
        176                 else:
        177                     kwargs[new_arg_name] = new_arg_value
    --> 178             return func(*args, **kwargs)
        179         return wrapper
        180     return _deprecate_kwarg


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/util/_decorators.py in wrapper(*args, **kwargs)
        176                 else:
        177                     kwargs[new_arg_name] = new_arg_value
    --> 178             return func(*args, **kwargs)
        179         return wrapper
        180     return _deprecate_kwarg


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/io/excel.py in read_excel(io, sheet_name, header, names, index_col, usecols, squeeze, dtype, engine, converters, true_values, false_values, skiprows, nrows, na_values, parse_dates, date_parser, thousands, comment, skipfooter, convert_float, **kwds)
        305 
        306     if not isinstance(io, ExcelFile):
    --> 307         io = ExcelFile(io, engine=engine)
        308 
        309     return io.parse(


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/io/excel.py in __init__(self, io, **kwds)
        374             io = _urlopen(self._io)
        375         elif not isinstance(self.io, (ExcelFile, xlrd.Book)):
    --> 376             io, _, _, _ = get_filepath_or_buffer(self._io)
        377 
        378         if engine == 'xlrd' and isinstance(io, xlrd.Book):


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/io/common.py in get_filepath_or_buffer(filepath_or_buffer, encoding, compression, mode)
        216     if not is_file_like(filepath_or_buffer):
        217         msg = "Invalid file path or buffer object type: {_type}"
    --> 218         raise ValueError(msg.format(_type=type(filepath_or_buffer)))
        219 
        220     return filepath_or_buffer, None, compression, False


    ValueError: Invalid file path or buffer object type: <class 'pandas.core.frame.DataFrame'>



```python
# Renaming the columns

file_1 = house_file.rename(columns=
                  {"Housing Table 2b. Confidence in Ability to Make Next Month's Payment for Renter-Occupied Housing Units, by Select Characteristics: United States": "Characteristics", 
                           "Unnamed: 1": "Total",
                           "Unnamed: 2": "Occupied without rent",
                  "Unnamed: 3": "No confidence",
                  "Unnamed: 4": "Slight confidence",
                   "Unnamed: 5": "Moderate confidence",
                   "Unnamed: 6": "High confidence",
                   "Unnamed: 7": "Payment is/will be deferred",
                   "Unnamed: 8": "Did not report",
                   "Unnamed: 9": "Did not report to tenure"
                  })
print(file_1)
#print(file_1.head(10))
```

                                          Characteristics     Total  \
    0   Source: U.S. Census Bureau Household Pulse Sur...       NaN   
    1   Total Population 18 Years and Older in Renter-...       NaN   
    2                              Select characteristics     Total   
    3                                                 NaN       NaN   
    4                                                 NaN       NaN   
    5                                               Total  75266101   
    6                                                Age        NaN   
    7                                             18 - 24   7313446   
    8                                             25 - 39  33959243   
    9                                             40 - 54  17607031   
    10                                            55 - 64   9157888   
    11                                       65 and above   7228493   
    12                                               Sex        NaN   
    13                                               Male  34772104   
    14                                             Female  40493997   
    15                          Hispanic origin and Race        NaN   
    16            Hispanic or Latino (may be of any race)  16075749   
    17                          White alone, not Hispanic  37772948   
    18                          Black alone, not Hispanic  14221712   
    19                          Asian alone, not Hispanic   3215458   
    20      Two or more races + Other races, not Hispanic   3980236   
    21                                         Education        NaN   
    22                              Less than high school   7630908   
    23                                 High school or GED  26587535   
    24                    Some college/associate’s degree  24354295   
    25                        Bachelor’s degree or higher  16693364   
    26                                    Marital status        NaN   
    27                                            Married  25834503   
    28                                            Widowed   2202944   
    29                                 Divorced/separated  15201104   
    30                                      Never married  31865484   
    31                                     Did not report    162066   
    32           Presence of children under 18 years old        NaN   
    33                              Children in household  32906303   
    34                                        No children  42359798   
    35  Respondent or household member experienced los...       NaN   
    36                                                Yes  41321638   
    37                                                 No  33841565   
    38                                     Did not report    102898   
    39                     Respondent currently employed        NaN   
    40                                                Yes  39313969   
    41                                                 No  35828698   
    42                                     Did not report    123434   
    43                                  Household income        NaN   
    44                                  Less than $25,000  21689403   
    45                                  $25,000 - $34,999  12988376   
    46                                  $35,000 - $49,999  11602952   
    47                                  $50,000 - $74,999  11880529   
    48                                  $75,000 - $99,999   6442384   
    49                                $100,000 - $149,999   5653816   
    50                                $150,000 - $199,999   1708519   
    51                                 $200,000 and above   1467499   
    52                                     Did not report   1832624   
    
        Occupied without rent                        No confidence  \
    0                     NaN                                  NaN   
    1                     NaN                                  NaN   
    2   Occupied without rent  Confidence to pay next month’s rent   
    3                     NaN                        No confidence   
    4                     NaN                                  NaN   
    5                 3798689                              8918242   
    6                     NaN                                  NaN   
    7                  286454                               639268   
    8                 1546625                              4399374   
    9                  969268                              2469898   
    10                 501794                               989617   
    11                 494549                               420084   
    12                    NaN                                  NaN   
    13                1917582                              4169523   
    14                1881108                              4748719   
    15                    NaN                                  NaN   
    16                 708252                              2723391   
    17                2119711                              3020518   
    18                 650218                              2331905   
    19                 122829                               308873   
    20                 197681                               533556   
    21                    NaN                                  NaN   
    22                 513201                              1482489   
    23                1279935                              3706781   
    24                1322092                              2792612   
    25                 683462                               936360   
    26                    NaN                                  NaN   
    27                1177934                              2965813   
    28                 129374                               222984   
    29                 935960                              1930192   
    30                1503222                              3791412   
    31                  52199                                 7842   
    32                    NaN                                  NaN   
    33                1723646                              5027156   
    34                2075043                              3891086   
    35                    NaN                                  NaN   
    36                2021026                              7408049   
    37                1776290                              1510193   
    38                   1373                                    -   
    39                    NaN                                  NaN   
    40                1352887                              3021359   
    41                2443357                              5885026   
    42                   2445                                11857   
    43                    NaN                                  NaN   
    44                1670355                              3674597   
    45                 783383                              1737369   
    46                 376157                              1545670   
    47                 359512                              1149608   
    48                 205200                               394303   
    49                 188250                               187964   
    50                  51620                                47277   
    51                  51832                                 6968   
    52                 112379                               174485   
    
                          Slight confidence                  Moderate confidence  \
    0                                   NaN                                  NaN   
    1                                   NaN                                  NaN   
    2   Confidence to pay next month’s rent  Confidence to pay next month’s rent   
    3                     Slight confidence                  Moderate confidence   
    4                                   NaN                                  NaN   
    5                              12571649                             18070862   
    6                                   NaN                                  NaN   
    7                               1172462                              2366278   
    8                               5968053                              7623589   
    9                               3292263                              4272341   
    10                              1423160                              2213671   
    11                               715712                              1594982   
    12                                  NaN                                  NaN   
    13                              5147850                              8134709   
    14                              7423800                              9936152   
    15                                  NaN                                  NaN   
    16                              3765786                              4289939   
    17                              4193252                              8471643   
    18                              3340880                              3580659   
    19                               626124                               609280   
    20                               645608                              1119341   
    21                                  NaN                                  NaN   
    22                              1871459                              1973579   
    23                              5046450                              6599701   
    24                              4232609                              6489522   
    25                              1421132                              3008059   
    26                                  NaN                                  NaN   
    27                              3819950                              5805097   
    28                               349965                               382827   
    29                              2694637                              3655383   
    30                              5677647                              8207982   
    31                                29451                                19572   
    32                                  NaN                                  NaN   
    33                              6777250                              8111053   
    34                              5794399                              9959809   
    35                                  NaN                                  NaN   
    36                              9045115                             10963049   
    37                              3520496                              7098074   
    38                                 6038                                 9738   
    39                                  NaN                                  NaN   
    40                              5671822                              9241154   
    41                              6862370                              8827869   
    42                                37457                                 1838   
    43                                  NaN                                  NaN   
    44                              4503163                              5662511   
    45                              2787412                              3398243   
    46                              2066892                              3066365   
    47                              1853850                              2877970   
    48                               711095                              1269592   
    49                               310039                              1136326   
    50                                56030                               204079   
    51                                26299                                94045   
    52                               256869                               361729   
    
                            High confidence          Payment is/will be deferred  \
    0                                   NaN                                  NaN   
    1                                   NaN                                  NaN   
    2   Confidence to pay next month’s rent  Confidence to pay next month’s rent   
    3                       High confidence          Payment is/will be deferred   
    4                                   NaN                                  NaN   
    5                              30643777                               938815   
    6                                   NaN                                  NaN   
    7                               2756071                                72011   
    8                              13842252                               500551   
    9                               6251731                               282027   
    10                              3897265                                51138   
    11                              3896458                                33088   
    12                                  NaN                                  NaN   
    13                             14857509                               514882   
    14                             15786268                               423933   
    15                                  NaN                                  NaN   
    16                              4383535                               115420   
    17                             19355953                               528322   
    18                              3952208                               220040   
    19                              1530841                                16760   
    20                              1421240                                58273   
    21                                  NaN                                  NaN   
    22                              1588923                                55419   
    23                              9522006                               343938   
    24                              9112126                               332959   
    25                             10420722                               206499   
    26                                  NaN                                  NaN   
    27                             11777371                               219162   
    28                              1104429                                12613   
    29                              5611630                               259105   
    30                             12112585                               447936   
    31                                37762                                    -   
    32                                  NaN                                  NaN   
    33                             10689768                               452199   
    34                             19954009                               486617   
    35                                  NaN                                  NaN   
    36                             11226544                               492088   
    37                             19333237                               446727   
    38                                83997                                    -   
    39                                  NaN                                  NaN   
    40                             19426974                               524342   
    41                             11148719                               414473   
    42                                68084                                    -   
    43                                  NaN                                  NaN   
    44                              5753678                               356632   
    45                              4204783                                77185   
    46                              4479861                                68006   
    47                              5474198                               164259   
    48                              3773428                                88765   
    49                              3678059                                96797   
    50                              1336142                                13371   
    51                              1260841                                27513   
    52                               682788                                46285   
    
                             Did not report  Did not report to tenure  
    0                                   NaN                       NaN  
    1                                   NaN                       NaN  
    2   Confidence to pay next month’s rent  Did not report to tenure  
    3                        Did not report                       NaN  
    4                                   NaN                       NaN  
    5                                324066                  26676331  
    6                                   NaN                       NaN  
    7                                 20902                   2625570  
    8                                 78798                   8137828  
    9                                 69504                   6160146  
    10                                81243                   4476699  
    11                                73620                   5276088  
    12                                  NaN                       NaN  
    13                                30049                  11927883  
    14                               294018                  14748448  
    15                                  NaN                       NaN  
    16                                89427                   5834066  
    17                                83550                  14293951  
    18                               145803                   4084623  
    19                                  751                   1400182  
    20                                 4536                   1063508  
    21                                  NaN                       NaN  
    22                               145838                   3033298  
    23                                88723                  10016935  
    24                                72375                   7735679  
    25                                17130                   5890419  
    26                                  NaN                       NaN  
    27                                69175                  12803992  
    28                                  751                   1533592  
    29                               114198                   3731480  
    30                               124700                   7489643  
    31                                15241                   1117623  
    32                                  NaN                       NaN  
    33                               125231                  11427501  
    34                               198836                  15248829  
    35                                  NaN                       NaN  
    36                               165766                  12672258  
    37                               156548                  12877152  
    38                                 1752                   1126920  
    39                                  NaN                       NaN  
    40                                75432                  12821000  
    41                               246882                  12471720  
    42                                 1752                   1383610  
    43                                  NaN                       NaN  
    44                                68466                    154249  
    45                                    -                     66443  
    46                                    -                     40117  
    47                                 1131                    104523  
    48                                    -                     33749  
    49                                56380                     22708  
    50                                    -                     11099  
    51                                    -                     15879  
    52                               198089                  26227564  



```python
file_1
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Characteristics</th>
      <th>Total</th>
      <th>Occupied without rent</th>
      <th>No confidence</th>
      <th>Slight confidence</th>
      <th>Moderate confidence</th>
      <th>High confidence</th>
      <th>Payment is/will be deferred</th>
      <th>Did not report</th>
      <th>Did not report to tenure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Source: U.S. Census Bureau Household Pulse Sur...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Total Population 18 Years and Older in Renter-...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Select characteristics</td>
      <td>Total</td>
      <td>Occupied without rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Confidence to pay next month’s rent</td>
      <td>Did not report to tenure</td>
    </tr>
    <tr>
      <th>3</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>No confidence</td>
      <td>Slight confidence</td>
      <td>Moderate confidence</td>
      <td>High confidence</td>
      <td>Payment is/will be deferred</td>
      <td>Did not report</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Total</td>
      <td>75266101</td>
      <td>3798689</td>
      <td>8918242</td>
      <td>12571649</td>
      <td>18070862</td>
      <td>30643777</td>
      <td>938815</td>
      <td>324066</td>
      <td>26676331</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Age</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>7</th>
      <td>18 - 24</td>
      <td>7313446</td>
      <td>286454</td>
      <td>639268</td>
      <td>1172462</td>
      <td>2366278</td>
      <td>2756071</td>
      <td>72011</td>
      <td>20902</td>
      <td>2625570</td>
    </tr>
    <tr>
      <th>8</th>
      <td>25 - 39</td>
      <td>33959243</td>
      <td>1546625</td>
      <td>4399374</td>
      <td>5968053</td>
      <td>7623589</td>
      <td>13842252</td>
      <td>500551</td>
      <td>78798</td>
      <td>8137828</td>
    </tr>
    <tr>
      <th>9</th>
      <td>40 - 54</td>
      <td>17607031</td>
      <td>969268</td>
      <td>2469898</td>
      <td>3292263</td>
      <td>4272341</td>
      <td>6251731</td>
      <td>282027</td>
      <td>69504</td>
      <td>6160146</td>
    </tr>
    <tr>
      <th>10</th>
      <td>55 - 64</td>
      <td>9157888</td>
      <td>501794</td>
      <td>989617</td>
      <td>1423160</td>
      <td>2213671</td>
      <td>3897265</td>
      <td>51138</td>
      <td>81243</td>
      <td>4476699</td>
    </tr>
    <tr>
      <th>11</th>
      <td>65 and above</td>
      <td>7228493</td>
      <td>494549</td>
      <td>420084</td>
      <td>715712</td>
      <td>1594982</td>
      <td>3896458</td>
      <td>33088</td>
      <td>73620</td>
      <td>5276088</td>
    </tr>
    <tr>
      <th>12</th>
      <td>Sex</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Male</td>
      <td>34772104</td>
      <td>1917582</td>
      <td>4169523</td>
      <td>5147850</td>
      <td>8134709</td>
      <td>14857509</td>
      <td>514882</td>
      <td>30049</td>
      <td>11927883</td>
    </tr>
    <tr>
      <th>14</th>
      <td>Female</td>
      <td>40493997</td>
      <td>1881108</td>
      <td>4748719</td>
      <td>7423800</td>
      <td>9936152</td>
      <td>15786268</td>
      <td>423933</td>
      <td>294018</td>
      <td>14748448</td>
    </tr>
    <tr>
      <th>15</th>
      <td>Hispanic origin and Race</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Hispanic or Latino (may be of any race)</td>
      <td>16075749</td>
      <td>708252</td>
      <td>2723391</td>
      <td>3765786</td>
      <td>4289939</td>
      <td>4383535</td>
      <td>115420</td>
      <td>89427</td>
      <td>5834066</td>
    </tr>
    <tr>
      <th>17</th>
      <td>White alone, not Hispanic</td>
      <td>37772948</td>
      <td>2119711</td>
      <td>3020518</td>
      <td>4193252</td>
      <td>8471643</td>
      <td>19355953</td>
      <td>528322</td>
      <td>83550</td>
      <td>14293951</td>
    </tr>
    <tr>
      <th>18</th>
      <td>Black alone, not Hispanic</td>
      <td>14221712</td>
      <td>650218</td>
      <td>2331905</td>
      <td>3340880</td>
      <td>3580659</td>
      <td>3952208</td>
      <td>220040</td>
      <td>145803</td>
      <td>4084623</td>
    </tr>
    <tr>
      <th>19</th>
      <td>Asian alone, not Hispanic</td>
      <td>3215458</td>
      <td>122829</td>
      <td>308873</td>
      <td>626124</td>
      <td>609280</td>
      <td>1530841</td>
      <td>16760</td>
      <td>751</td>
      <td>1400182</td>
    </tr>
    <tr>
      <th>20</th>
      <td>Two or more races + Other races, not Hispanic</td>
      <td>3980236</td>
      <td>197681</td>
      <td>533556</td>
      <td>645608</td>
      <td>1119341</td>
      <td>1421240</td>
      <td>58273</td>
      <td>4536</td>
      <td>1063508</td>
    </tr>
    <tr>
      <th>21</th>
      <td>Education</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>22</th>
      <td>Less than high school</td>
      <td>7630908</td>
      <td>513201</td>
      <td>1482489</td>
      <td>1871459</td>
      <td>1973579</td>
      <td>1588923</td>
      <td>55419</td>
      <td>145838</td>
      <td>3033298</td>
    </tr>
    <tr>
      <th>23</th>
      <td>High school or GED</td>
      <td>26587535</td>
      <td>1279935</td>
      <td>3706781</td>
      <td>5046450</td>
      <td>6599701</td>
      <td>9522006</td>
      <td>343938</td>
      <td>88723</td>
      <td>10016935</td>
    </tr>
    <tr>
      <th>24</th>
      <td>Some college/associate’s degree</td>
      <td>24354295</td>
      <td>1322092</td>
      <td>2792612</td>
      <td>4232609</td>
      <td>6489522</td>
      <td>9112126</td>
      <td>332959</td>
      <td>72375</td>
      <td>7735679</td>
    </tr>
    <tr>
      <th>25</th>
      <td>Bachelor’s degree or higher</td>
      <td>16693364</td>
      <td>683462</td>
      <td>936360</td>
      <td>1421132</td>
      <td>3008059</td>
      <td>10420722</td>
      <td>206499</td>
      <td>17130</td>
      <td>5890419</td>
    </tr>
    <tr>
      <th>26</th>
      <td>Marital status</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>27</th>
      <td>Married</td>
      <td>25834503</td>
      <td>1177934</td>
      <td>2965813</td>
      <td>3819950</td>
      <td>5805097</td>
      <td>11777371</td>
      <td>219162</td>
      <td>69175</td>
      <td>12803992</td>
    </tr>
    <tr>
      <th>28</th>
      <td>Widowed</td>
      <td>2202944</td>
      <td>129374</td>
      <td>222984</td>
      <td>349965</td>
      <td>382827</td>
      <td>1104429</td>
      <td>12613</td>
      <td>751</td>
      <td>1533592</td>
    </tr>
    <tr>
      <th>29</th>
      <td>Divorced/separated</td>
      <td>15201104</td>
      <td>935960</td>
      <td>1930192</td>
      <td>2694637</td>
      <td>3655383</td>
      <td>5611630</td>
      <td>259105</td>
      <td>114198</td>
      <td>3731480</td>
    </tr>
    <tr>
      <th>30</th>
      <td>Never married</td>
      <td>31865484</td>
      <td>1503222</td>
      <td>3791412</td>
      <td>5677647</td>
      <td>8207982</td>
      <td>12112585</td>
      <td>447936</td>
      <td>124700</td>
      <td>7489643</td>
    </tr>
    <tr>
      <th>31</th>
      <td>Did not report</td>
      <td>162066</td>
      <td>52199</td>
      <td>7842</td>
      <td>29451</td>
      <td>19572</td>
      <td>37762</td>
      <td>-</td>
      <td>15241</td>
      <td>1117623</td>
    </tr>
    <tr>
      <th>32</th>
      <td>Presence of children under 18 years old</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>33</th>
      <td>Children in household</td>
      <td>32906303</td>
      <td>1723646</td>
      <td>5027156</td>
      <td>6777250</td>
      <td>8111053</td>
      <td>10689768</td>
      <td>452199</td>
      <td>125231</td>
      <td>11427501</td>
    </tr>
    <tr>
      <th>34</th>
      <td>No children</td>
      <td>42359798</td>
      <td>2075043</td>
      <td>3891086</td>
      <td>5794399</td>
      <td>9959809</td>
      <td>19954009</td>
      <td>486617</td>
      <td>198836</td>
      <td>15248829</td>
    </tr>
    <tr>
      <th>35</th>
      <td>Respondent or household member experienced los...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>36</th>
      <td>Yes</td>
      <td>41321638</td>
      <td>2021026</td>
      <td>7408049</td>
      <td>9045115</td>
      <td>10963049</td>
      <td>11226544</td>
      <td>492088</td>
      <td>165766</td>
      <td>12672258</td>
    </tr>
    <tr>
      <th>37</th>
      <td>No</td>
      <td>33841565</td>
      <td>1776290</td>
      <td>1510193</td>
      <td>3520496</td>
      <td>7098074</td>
      <td>19333237</td>
      <td>446727</td>
      <td>156548</td>
      <td>12877152</td>
    </tr>
    <tr>
      <th>38</th>
      <td>Did not report</td>
      <td>102898</td>
      <td>1373</td>
      <td>-</td>
      <td>6038</td>
      <td>9738</td>
      <td>83997</td>
      <td>-</td>
      <td>1752</td>
      <td>1126920</td>
    </tr>
    <tr>
      <th>39</th>
      <td>Respondent currently employed</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>40</th>
      <td>Yes</td>
      <td>39313969</td>
      <td>1352887</td>
      <td>3021359</td>
      <td>5671822</td>
      <td>9241154</td>
      <td>19426974</td>
      <td>524342</td>
      <td>75432</td>
      <td>12821000</td>
    </tr>
    <tr>
      <th>41</th>
      <td>No</td>
      <td>35828698</td>
      <td>2443357</td>
      <td>5885026</td>
      <td>6862370</td>
      <td>8827869</td>
      <td>11148719</td>
      <td>414473</td>
      <td>246882</td>
      <td>12471720</td>
    </tr>
    <tr>
      <th>42</th>
      <td>Did not report</td>
      <td>123434</td>
      <td>2445</td>
      <td>11857</td>
      <td>37457</td>
      <td>1838</td>
      <td>68084</td>
      <td>-</td>
      <td>1752</td>
      <td>1383610</td>
    </tr>
    <tr>
      <th>43</th>
      <td>Household income</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>44</th>
      <td>Less than $25,000</td>
      <td>21689403</td>
      <td>1670355</td>
      <td>3674597</td>
      <td>4503163</td>
      <td>5662511</td>
      <td>5753678</td>
      <td>356632</td>
      <td>68466</td>
      <td>154249</td>
    </tr>
    <tr>
      <th>45</th>
      <td>$25,000 - $34,999</td>
      <td>12988376</td>
      <td>783383</td>
      <td>1737369</td>
      <td>2787412</td>
      <td>3398243</td>
      <td>4204783</td>
      <td>77185</td>
      <td>-</td>
      <td>66443</td>
    </tr>
    <tr>
      <th>46</th>
      <td>$35,000 - $49,999</td>
      <td>11602952</td>
      <td>376157</td>
      <td>1545670</td>
      <td>2066892</td>
      <td>3066365</td>
      <td>4479861</td>
      <td>68006</td>
      <td>-</td>
      <td>40117</td>
    </tr>
    <tr>
      <th>47</th>
      <td>$50,000 - $74,999</td>
      <td>11880529</td>
      <td>359512</td>
      <td>1149608</td>
      <td>1853850</td>
      <td>2877970</td>
      <td>5474198</td>
      <td>164259</td>
      <td>1131</td>
      <td>104523</td>
    </tr>
    <tr>
      <th>48</th>
      <td>$75,000 - $99,999</td>
      <td>6442384</td>
      <td>205200</td>
      <td>394303</td>
      <td>711095</td>
      <td>1269592</td>
      <td>3773428</td>
      <td>88765</td>
      <td>-</td>
      <td>33749</td>
    </tr>
    <tr>
      <th>49</th>
      <td>$100,000 - $149,999</td>
      <td>5653816</td>
      <td>188250</td>
      <td>187964</td>
      <td>310039</td>
      <td>1136326</td>
      <td>3678059</td>
      <td>96797</td>
      <td>56380</td>
      <td>22708</td>
    </tr>
    <tr>
      <th>50</th>
      <td>$150,000 - $199,999</td>
      <td>1708519</td>
      <td>51620</td>
      <td>47277</td>
      <td>56030</td>
      <td>204079</td>
      <td>1336142</td>
      <td>13371</td>
      <td>-</td>
      <td>11099</td>
    </tr>
    <tr>
      <th>51</th>
      <td>$200,000 and above</td>
      <td>1467499</td>
      <td>51832</td>
      <td>6968</td>
      <td>26299</td>
      <td>94045</td>
      <td>1260841</td>
      <td>27513</td>
      <td>-</td>
      <td>15879</td>
    </tr>
    <tr>
      <th>52</th>
      <td>Did not report</td>
      <td>1832624</td>
      <td>112379</td>
      <td>174485</td>
      <td>256869</td>
      <td>361729</td>
      <td>682788</td>
      <td>46285</td>
      <td>198089</td>
      <td>26227564</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Dropping first five rows
file_2 = file_1.iloc[5:]
file_2

```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Characteristics</th>
      <th>Total</th>
      <th>Occupied without rent</th>
      <th>No confidence</th>
      <th>Slight confidence</th>
      <th>Moderate confidence</th>
      <th>High confidence</th>
      <th>Payment is/will be deferred</th>
      <th>Did not report</th>
      <th>Did not report to tenure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>5</th>
      <td>Total</td>
      <td>75266101</td>
      <td>3798689</td>
      <td>8918242</td>
      <td>12571649</td>
      <td>18070862</td>
      <td>30643777</td>
      <td>938815</td>
      <td>324066</td>
      <td>26676331</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Age</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>7</th>
      <td>18 - 24</td>
      <td>7313446</td>
      <td>286454</td>
      <td>639268</td>
      <td>1172462</td>
      <td>2366278</td>
      <td>2756071</td>
      <td>72011</td>
      <td>20902</td>
      <td>2625570</td>
    </tr>
    <tr>
      <th>8</th>
      <td>25 - 39</td>
      <td>33959243</td>
      <td>1546625</td>
      <td>4399374</td>
      <td>5968053</td>
      <td>7623589</td>
      <td>13842252</td>
      <td>500551</td>
      <td>78798</td>
      <td>8137828</td>
    </tr>
    <tr>
      <th>9</th>
      <td>40 - 54</td>
      <td>17607031</td>
      <td>969268</td>
      <td>2469898</td>
      <td>3292263</td>
      <td>4272341</td>
      <td>6251731</td>
      <td>282027</td>
      <td>69504</td>
      <td>6160146</td>
    </tr>
    <tr>
      <th>10</th>
      <td>55 - 64</td>
      <td>9157888</td>
      <td>501794</td>
      <td>989617</td>
      <td>1423160</td>
      <td>2213671</td>
      <td>3897265</td>
      <td>51138</td>
      <td>81243</td>
      <td>4476699</td>
    </tr>
    <tr>
      <th>11</th>
      <td>65 and above</td>
      <td>7228493</td>
      <td>494549</td>
      <td>420084</td>
      <td>715712</td>
      <td>1594982</td>
      <td>3896458</td>
      <td>33088</td>
      <td>73620</td>
      <td>5276088</td>
    </tr>
    <tr>
      <th>12</th>
      <td>Sex</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Male</td>
      <td>34772104</td>
      <td>1917582</td>
      <td>4169523</td>
      <td>5147850</td>
      <td>8134709</td>
      <td>14857509</td>
      <td>514882</td>
      <td>30049</td>
      <td>11927883</td>
    </tr>
    <tr>
      <th>14</th>
      <td>Female</td>
      <td>40493997</td>
      <td>1881108</td>
      <td>4748719</td>
      <td>7423800</td>
      <td>9936152</td>
      <td>15786268</td>
      <td>423933</td>
      <td>294018</td>
      <td>14748448</td>
    </tr>
    <tr>
      <th>15</th>
      <td>Hispanic origin and Race</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Hispanic or Latino (may be of any race)</td>
      <td>16075749</td>
      <td>708252</td>
      <td>2723391</td>
      <td>3765786</td>
      <td>4289939</td>
      <td>4383535</td>
      <td>115420</td>
      <td>89427</td>
      <td>5834066</td>
    </tr>
    <tr>
      <th>17</th>
      <td>White alone, not Hispanic</td>
      <td>37772948</td>
      <td>2119711</td>
      <td>3020518</td>
      <td>4193252</td>
      <td>8471643</td>
      <td>19355953</td>
      <td>528322</td>
      <td>83550</td>
      <td>14293951</td>
    </tr>
    <tr>
      <th>18</th>
      <td>Black alone, not Hispanic</td>
      <td>14221712</td>
      <td>650218</td>
      <td>2331905</td>
      <td>3340880</td>
      <td>3580659</td>
      <td>3952208</td>
      <td>220040</td>
      <td>145803</td>
      <td>4084623</td>
    </tr>
    <tr>
      <th>19</th>
      <td>Asian alone, not Hispanic</td>
      <td>3215458</td>
      <td>122829</td>
      <td>308873</td>
      <td>626124</td>
      <td>609280</td>
      <td>1530841</td>
      <td>16760</td>
      <td>751</td>
      <td>1400182</td>
    </tr>
    <tr>
      <th>20</th>
      <td>Two or more races + Other races, not Hispanic</td>
      <td>3980236</td>
      <td>197681</td>
      <td>533556</td>
      <td>645608</td>
      <td>1119341</td>
      <td>1421240</td>
      <td>58273</td>
      <td>4536</td>
      <td>1063508</td>
    </tr>
    <tr>
      <th>21</th>
      <td>Education</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>22</th>
      <td>Less than high school</td>
      <td>7630908</td>
      <td>513201</td>
      <td>1482489</td>
      <td>1871459</td>
      <td>1973579</td>
      <td>1588923</td>
      <td>55419</td>
      <td>145838</td>
      <td>3033298</td>
    </tr>
    <tr>
      <th>23</th>
      <td>High school or GED</td>
      <td>26587535</td>
      <td>1279935</td>
      <td>3706781</td>
      <td>5046450</td>
      <td>6599701</td>
      <td>9522006</td>
      <td>343938</td>
      <td>88723</td>
      <td>10016935</td>
    </tr>
    <tr>
      <th>24</th>
      <td>Some college/associate’s degree</td>
      <td>24354295</td>
      <td>1322092</td>
      <td>2792612</td>
      <td>4232609</td>
      <td>6489522</td>
      <td>9112126</td>
      <td>332959</td>
      <td>72375</td>
      <td>7735679</td>
    </tr>
    <tr>
      <th>25</th>
      <td>Bachelor’s degree or higher</td>
      <td>16693364</td>
      <td>683462</td>
      <td>936360</td>
      <td>1421132</td>
      <td>3008059</td>
      <td>10420722</td>
      <td>206499</td>
      <td>17130</td>
      <td>5890419</td>
    </tr>
    <tr>
      <th>26</th>
      <td>Marital status</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>27</th>
      <td>Married</td>
      <td>25834503</td>
      <td>1177934</td>
      <td>2965813</td>
      <td>3819950</td>
      <td>5805097</td>
      <td>11777371</td>
      <td>219162</td>
      <td>69175</td>
      <td>12803992</td>
    </tr>
    <tr>
      <th>28</th>
      <td>Widowed</td>
      <td>2202944</td>
      <td>129374</td>
      <td>222984</td>
      <td>349965</td>
      <td>382827</td>
      <td>1104429</td>
      <td>12613</td>
      <td>751</td>
      <td>1533592</td>
    </tr>
    <tr>
      <th>29</th>
      <td>Divorced/separated</td>
      <td>15201104</td>
      <td>935960</td>
      <td>1930192</td>
      <td>2694637</td>
      <td>3655383</td>
      <td>5611630</td>
      <td>259105</td>
      <td>114198</td>
      <td>3731480</td>
    </tr>
    <tr>
      <th>30</th>
      <td>Never married</td>
      <td>31865484</td>
      <td>1503222</td>
      <td>3791412</td>
      <td>5677647</td>
      <td>8207982</td>
      <td>12112585</td>
      <td>447936</td>
      <td>124700</td>
      <td>7489643</td>
    </tr>
    <tr>
      <th>31</th>
      <td>Did not report</td>
      <td>162066</td>
      <td>52199</td>
      <td>7842</td>
      <td>29451</td>
      <td>19572</td>
      <td>37762</td>
      <td>-</td>
      <td>15241</td>
      <td>1117623</td>
    </tr>
    <tr>
      <th>32</th>
      <td>Presence of children under 18 years old</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>33</th>
      <td>Children in household</td>
      <td>32906303</td>
      <td>1723646</td>
      <td>5027156</td>
      <td>6777250</td>
      <td>8111053</td>
      <td>10689768</td>
      <td>452199</td>
      <td>125231</td>
      <td>11427501</td>
    </tr>
    <tr>
      <th>34</th>
      <td>No children</td>
      <td>42359798</td>
      <td>2075043</td>
      <td>3891086</td>
      <td>5794399</td>
      <td>9959809</td>
      <td>19954009</td>
      <td>486617</td>
      <td>198836</td>
      <td>15248829</td>
    </tr>
    <tr>
      <th>35</th>
      <td>Respondent or household member experienced los...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>36</th>
      <td>Yes</td>
      <td>41321638</td>
      <td>2021026</td>
      <td>7408049</td>
      <td>9045115</td>
      <td>10963049</td>
      <td>11226544</td>
      <td>492088</td>
      <td>165766</td>
      <td>12672258</td>
    </tr>
    <tr>
      <th>37</th>
      <td>No</td>
      <td>33841565</td>
      <td>1776290</td>
      <td>1510193</td>
      <td>3520496</td>
      <td>7098074</td>
      <td>19333237</td>
      <td>446727</td>
      <td>156548</td>
      <td>12877152</td>
    </tr>
    <tr>
      <th>38</th>
      <td>Did not report</td>
      <td>102898</td>
      <td>1373</td>
      <td>-</td>
      <td>6038</td>
      <td>9738</td>
      <td>83997</td>
      <td>-</td>
      <td>1752</td>
      <td>1126920</td>
    </tr>
    <tr>
      <th>39</th>
      <td>Respondent currently employed</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>40</th>
      <td>Yes</td>
      <td>39313969</td>
      <td>1352887</td>
      <td>3021359</td>
      <td>5671822</td>
      <td>9241154</td>
      <td>19426974</td>
      <td>524342</td>
      <td>75432</td>
      <td>12821000</td>
    </tr>
    <tr>
      <th>41</th>
      <td>No</td>
      <td>35828698</td>
      <td>2443357</td>
      <td>5885026</td>
      <td>6862370</td>
      <td>8827869</td>
      <td>11148719</td>
      <td>414473</td>
      <td>246882</td>
      <td>12471720</td>
    </tr>
    <tr>
      <th>42</th>
      <td>Did not report</td>
      <td>123434</td>
      <td>2445</td>
      <td>11857</td>
      <td>37457</td>
      <td>1838</td>
      <td>68084</td>
      <td>-</td>
      <td>1752</td>
      <td>1383610</td>
    </tr>
    <tr>
      <th>43</th>
      <td>Household income</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>44</th>
      <td>Less than $25,000</td>
      <td>21689403</td>
      <td>1670355</td>
      <td>3674597</td>
      <td>4503163</td>
      <td>5662511</td>
      <td>5753678</td>
      <td>356632</td>
      <td>68466</td>
      <td>154249</td>
    </tr>
    <tr>
      <th>45</th>
      <td>$25,000 - $34,999</td>
      <td>12988376</td>
      <td>783383</td>
      <td>1737369</td>
      <td>2787412</td>
      <td>3398243</td>
      <td>4204783</td>
      <td>77185</td>
      <td>-</td>
      <td>66443</td>
    </tr>
    <tr>
      <th>46</th>
      <td>$35,000 - $49,999</td>
      <td>11602952</td>
      <td>376157</td>
      <td>1545670</td>
      <td>2066892</td>
      <td>3066365</td>
      <td>4479861</td>
      <td>68006</td>
      <td>-</td>
      <td>40117</td>
    </tr>
    <tr>
      <th>47</th>
      <td>$50,000 - $74,999</td>
      <td>11880529</td>
      <td>359512</td>
      <td>1149608</td>
      <td>1853850</td>
      <td>2877970</td>
      <td>5474198</td>
      <td>164259</td>
      <td>1131</td>
      <td>104523</td>
    </tr>
    <tr>
      <th>48</th>
      <td>$75,000 - $99,999</td>
      <td>6442384</td>
      <td>205200</td>
      <td>394303</td>
      <td>711095</td>
      <td>1269592</td>
      <td>3773428</td>
      <td>88765</td>
      <td>-</td>
      <td>33749</td>
    </tr>
    <tr>
      <th>49</th>
      <td>$100,000 - $149,999</td>
      <td>5653816</td>
      <td>188250</td>
      <td>187964</td>
      <td>310039</td>
      <td>1136326</td>
      <td>3678059</td>
      <td>96797</td>
      <td>56380</td>
      <td>22708</td>
    </tr>
    <tr>
      <th>50</th>
      <td>$150,000 - $199,999</td>
      <td>1708519</td>
      <td>51620</td>
      <td>47277</td>
      <td>56030</td>
      <td>204079</td>
      <td>1336142</td>
      <td>13371</td>
      <td>-</td>
      <td>11099</td>
    </tr>
    <tr>
      <th>51</th>
      <td>$200,000 and above</td>
      <td>1467499</td>
      <td>51832</td>
      <td>6968</td>
      <td>26299</td>
      <td>94045</td>
      <td>1260841</td>
      <td>27513</td>
      <td>-</td>
      <td>15879</td>
    </tr>
    <tr>
      <th>52</th>
      <td>Did not report</td>
      <td>1832624</td>
      <td>112379</td>
      <td>174485</td>
      <td>256869</td>
      <td>361729</td>
      <td>682788</td>
      <td>46285</td>
      <td>198089</td>
      <td>26227564</td>
    </tr>
  </tbody>
</table>
</div>




```python

```


```python
# did't need this one

##Adding new column 'Category' by the end of the dataframe

# file_2['Category'] = 'category'

# # Moving column 'Category' to the front
# col_name="Category"
# first_col = file_2.pop(col_name)
# file_2.insert(0, col_name, first_col)
# file_2

```


```python
file_2.reset_index(inplace = True)
file_2
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>index</th>
      <th>Characteristics</th>
      <th>Total</th>
      <th>Occupied without rent</th>
      <th>No confidence</th>
      <th>Slight confidence</th>
      <th>Moderate confidence</th>
      <th>High confidence</th>
      <th>Payment is/will be deferred</th>
      <th>Did not report</th>
      <th>Did not report to tenure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5</td>
      <td>Total</td>
      <td>75266101</td>
      <td>3798689</td>
      <td>8918242</td>
      <td>12571649</td>
      <td>18070862</td>
      <td>30643777</td>
      <td>938815</td>
      <td>324066</td>
      <td>26676331</td>
    </tr>
    <tr>
      <th>1</th>
      <td>6</td>
      <td>Age</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7</td>
      <td>18 - 24</td>
      <td>7313446</td>
      <td>286454</td>
      <td>639268</td>
      <td>1172462</td>
      <td>2366278</td>
      <td>2756071</td>
      <td>72011</td>
      <td>20902</td>
      <td>2625570</td>
    </tr>
    <tr>
      <th>3</th>
      <td>8</td>
      <td>25 - 39</td>
      <td>33959243</td>
      <td>1546625</td>
      <td>4399374</td>
      <td>5968053</td>
      <td>7623589</td>
      <td>13842252</td>
      <td>500551</td>
      <td>78798</td>
      <td>8137828</td>
    </tr>
    <tr>
      <th>4</th>
      <td>9</td>
      <td>40 - 54</td>
      <td>17607031</td>
      <td>969268</td>
      <td>2469898</td>
      <td>3292263</td>
      <td>4272341</td>
      <td>6251731</td>
      <td>282027</td>
      <td>69504</td>
      <td>6160146</td>
    </tr>
    <tr>
      <th>5</th>
      <td>10</td>
      <td>55 - 64</td>
      <td>9157888</td>
      <td>501794</td>
      <td>989617</td>
      <td>1423160</td>
      <td>2213671</td>
      <td>3897265</td>
      <td>51138</td>
      <td>81243</td>
      <td>4476699</td>
    </tr>
    <tr>
      <th>6</th>
      <td>11</td>
      <td>65 and above</td>
      <td>7228493</td>
      <td>494549</td>
      <td>420084</td>
      <td>715712</td>
      <td>1594982</td>
      <td>3896458</td>
      <td>33088</td>
      <td>73620</td>
      <td>5276088</td>
    </tr>
    <tr>
      <th>7</th>
      <td>12</td>
      <td>Sex</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>8</th>
      <td>13</td>
      <td>Male</td>
      <td>34772104</td>
      <td>1917582</td>
      <td>4169523</td>
      <td>5147850</td>
      <td>8134709</td>
      <td>14857509</td>
      <td>514882</td>
      <td>30049</td>
      <td>11927883</td>
    </tr>
    <tr>
      <th>9</th>
      <td>14</td>
      <td>Female</td>
      <td>40493997</td>
      <td>1881108</td>
      <td>4748719</td>
      <td>7423800</td>
      <td>9936152</td>
      <td>15786268</td>
      <td>423933</td>
      <td>294018</td>
      <td>14748448</td>
    </tr>
    <tr>
      <th>10</th>
      <td>15</td>
      <td>Hispanic origin and Race</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>11</th>
      <td>16</td>
      <td>Hispanic or Latino (may be of any race)</td>
      <td>16075749</td>
      <td>708252</td>
      <td>2723391</td>
      <td>3765786</td>
      <td>4289939</td>
      <td>4383535</td>
      <td>115420</td>
      <td>89427</td>
      <td>5834066</td>
    </tr>
    <tr>
      <th>12</th>
      <td>17</td>
      <td>White alone, not Hispanic</td>
      <td>37772948</td>
      <td>2119711</td>
      <td>3020518</td>
      <td>4193252</td>
      <td>8471643</td>
      <td>19355953</td>
      <td>528322</td>
      <td>83550</td>
      <td>14293951</td>
    </tr>
    <tr>
      <th>13</th>
      <td>18</td>
      <td>Black alone, not Hispanic</td>
      <td>14221712</td>
      <td>650218</td>
      <td>2331905</td>
      <td>3340880</td>
      <td>3580659</td>
      <td>3952208</td>
      <td>220040</td>
      <td>145803</td>
      <td>4084623</td>
    </tr>
    <tr>
      <th>14</th>
      <td>19</td>
      <td>Asian alone, not Hispanic</td>
      <td>3215458</td>
      <td>122829</td>
      <td>308873</td>
      <td>626124</td>
      <td>609280</td>
      <td>1530841</td>
      <td>16760</td>
      <td>751</td>
      <td>1400182</td>
    </tr>
    <tr>
      <th>15</th>
      <td>20</td>
      <td>Two or more races + Other races, not Hispanic</td>
      <td>3980236</td>
      <td>197681</td>
      <td>533556</td>
      <td>645608</td>
      <td>1119341</td>
      <td>1421240</td>
      <td>58273</td>
      <td>4536</td>
      <td>1063508</td>
    </tr>
    <tr>
      <th>16</th>
      <td>21</td>
      <td>Education</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>17</th>
      <td>22</td>
      <td>Less than high school</td>
      <td>7630908</td>
      <td>513201</td>
      <td>1482489</td>
      <td>1871459</td>
      <td>1973579</td>
      <td>1588923</td>
      <td>55419</td>
      <td>145838</td>
      <td>3033298</td>
    </tr>
    <tr>
      <th>18</th>
      <td>23</td>
      <td>High school or GED</td>
      <td>26587535</td>
      <td>1279935</td>
      <td>3706781</td>
      <td>5046450</td>
      <td>6599701</td>
      <td>9522006</td>
      <td>343938</td>
      <td>88723</td>
      <td>10016935</td>
    </tr>
    <tr>
      <th>19</th>
      <td>24</td>
      <td>Some college/associate’s degree</td>
      <td>24354295</td>
      <td>1322092</td>
      <td>2792612</td>
      <td>4232609</td>
      <td>6489522</td>
      <td>9112126</td>
      <td>332959</td>
      <td>72375</td>
      <td>7735679</td>
    </tr>
    <tr>
      <th>20</th>
      <td>25</td>
      <td>Bachelor’s degree or higher</td>
      <td>16693364</td>
      <td>683462</td>
      <td>936360</td>
      <td>1421132</td>
      <td>3008059</td>
      <td>10420722</td>
      <td>206499</td>
      <td>17130</td>
      <td>5890419</td>
    </tr>
    <tr>
      <th>21</th>
      <td>26</td>
      <td>Marital status</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>22</th>
      <td>27</td>
      <td>Married</td>
      <td>25834503</td>
      <td>1177934</td>
      <td>2965813</td>
      <td>3819950</td>
      <td>5805097</td>
      <td>11777371</td>
      <td>219162</td>
      <td>69175</td>
      <td>12803992</td>
    </tr>
    <tr>
      <th>23</th>
      <td>28</td>
      <td>Widowed</td>
      <td>2202944</td>
      <td>129374</td>
      <td>222984</td>
      <td>349965</td>
      <td>382827</td>
      <td>1104429</td>
      <td>12613</td>
      <td>751</td>
      <td>1533592</td>
    </tr>
    <tr>
      <th>24</th>
      <td>29</td>
      <td>Divorced/separated</td>
      <td>15201104</td>
      <td>935960</td>
      <td>1930192</td>
      <td>2694637</td>
      <td>3655383</td>
      <td>5611630</td>
      <td>259105</td>
      <td>114198</td>
      <td>3731480</td>
    </tr>
    <tr>
      <th>25</th>
      <td>30</td>
      <td>Never married</td>
      <td>31865484</td>
      <td>1503222</td>
      <td>3791412</td>
      <td>5677647</td>
      <td>8207982</td>
      <td>12112585</td>
      <td>447936</td>
      <td>124700</td>
      <td>7489643</td>
    </tr>
    <tr>
      <th>26</th>
      <td>31</td>
      <td>Did not report</td>
      <td>162066</td>
      <td>52199</td>
      <td>7842</td>
      <td>29451</td>
      <td>19572</td>
      <td>37762</td>
      <td>-</td>
      <td>15241</td>
      <td>1117623</td>
    </tr>
    <tr>
      <th>27</th>
      <td>32</td>
      <td>Presence of children under 18 years old</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>28</th>
      <td>33</td>
      <td>Children in household</td>
      <td>32906303</td>
      <td>1723646</td>
      <td>5027156</td>
      <td>6777250</td>
      <td>8111053</td>
      <td>10689768</td>
      <td>452199</td>
      <td>125231</td>
      <td>11427501</td>
    </tr>
    <tr>
      <th>29</th>
      <td>34</td>
      <td>No children</td>
      <td>42359798</td>
      <td>2075043</td>
      <td>3891086</td>
      <td>5794399</td>
      <td>9959809</td>
      <td>19954009</td>
      <td>486617</td>
      <td>198836</td>
      <td>15248829</td>
    </tr>
    <tr>
      <th>30</th>
      <td>35</td>
      <td>Respondent or household member experienced los...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>31</th>
      <td>36</td>
      <td>Yes</td>
      <td>41321638</td>
      <td>2021026</td>
      <td>7408049</td>
      <td>9045115</td>
      <td>10963049</td>
      <td>11226544</td>
      <td>492088</td>
      <td>165766</td>
      <td>12672258</td>
    </tr>
    <tr>
      <th>32</th>
      <td>37</td>
      <td>No</td>
      <td>33841565</td>
      <td>1776290</td>
      <td>1510193</td>
      <td>3520496</td>
      <td>7098074</td>
      <td>19333237</td>
      <td>446727</td>
      <td>156548</td>
      <td>12877152</td>
    </tr>
    <tr>
      <th>33</th>
      <td>38</td>
      <td>Did not report</td>
      <td>102898</td>
      <td>1373</td>
      <td>-</td>
      <td>6038</td>
      <td>9738</td>
      <td>83997</td>
      <td>-</td>
      <td>1752</td>
      <td>1126920</td>
    </tr>
    <tr>
      <th>34</th>
      <td>39</td>
      <td>Respondent currently employed</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>35</th>
      <td>40</td>
      <td>Yes</td>
      <td>39313969</td>
      <td>1352887</td>
      <td>3021359</td>
      <td>5671822</td>
      <td>9241154</td>
      <td>19426974</td>
      <td>524342</td>
      <td>75432</td>
      <td>12821000</td>
    </tr>
    <tr>
      <th>36</th>
      <td>41</td>
      <td>No</td>
      <td>35828698</td>
      <td>2443357</td>
      <td>5885026</td>
      <td>6862370</td>
      <td>8827869</td>
      <td>11148719</td>
      <td>414473</td>
      <td>246882</td>
      <td>12471720</td>
    </tr>
    <tr>
      <th>37</th>
      <td>42</td>
      <td>Did not report</td>
      <td>123434</td>
      <td>2445</td>
      <td>11857</td>
      <td>37457</td>
      <td>1838</td>
      <td>68084</td>
      <td>-</td>
      <td>1752</td>
      <td>1383610</td>
    </tr>
    <tr>
      <th>38</th>
      <td>43</td>
      <td>Household income</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>39</th>
      <td>44</td>
      <td>Less than $25,000</td>
      <td>21689403</td>
      <td>1670355</td>
      <td>3674597</td>
      <td>4503163</td>
      <td>5662511</td>
      <td>5753678</td>
      <td>356632</td>
      <td>68466</td>
      <td>154249</td>
    </tr>
    <tr>
      <th>40</th>
      <td>45</td>
      <td>$25,000 - $34,999</td>
      <td>12988376</td>
      <td>783383</td>
      <td>1737369</td>
      <td>2787412</td>
      <td>3398243</td>
      <td>4204783</td>
      <td>77185</td>
      <td>-</td>
      <td>66443</td>
    </tr>
    <tr>
      <th>41</th>
      <td>46</td>
      <td>$35,000 - $49,999</td>
      <td>11602952</td>
      <td>376157</td>
      <td>1545670</td>
      <td>2066892</td>
      <td>3066365</td>
      <td>4479861</td>
      <td>68006</td>
      <td>-</td>
      <td>40117</td>
    </tr>
    <tr>
      <th>42</th>
      <td>47</td>
      <td>$50,000 - $74,999</td>
      <td>11880529</td>
      <td>359512</td>
      <td>1149608</td>
      <td>1853850</td>
      <td>2877970</td>
      <td>5474198</td>
      <td>164259</td>
      <td>1131</td>
      <td>104523</td>
    </tr>
    <tr>
      <th>43</th>
      <td>48</td>
      <td>$75,000 - $99,999</td>
      <td>6442384</td>
      <td>205200</td>
      <td>394303</td>
      <td>711095</td>
      <td>1269592</td>
      <td>3773428</td>
      <td>88765</td>
      <td>-</td>
      <td>33749</td>
    </tr>
    <tr>
      <th>44</th>
      <td>49</td>
      <td>$100,000 - $149,999</td>
      <td>5653816</td>
      <td>188250</td>
      <td>187964</td>
      <td>310039</td>
      <td>1136326</td>
      <td>3678059</td>
      <td>96797</td>
      <td>56380</td>
      <td>22708</td>
    </tr>
    <tr>
      <th>45</th>
      <td>50</td>
      <td>$150,000 - $199,999</td>
      <td>1708519</td>
      <td>51620</td>
      <td>47277</td>
      <td>56030</td>
      <td>204079</td>
      <td>1336142</td>
      <td>13371</td>
      <td>-</td>
      <td>11099</td>
    </tr>
    <tr>
      <th>46</th>
      <td>51</td>
      <td>$200,000 and above</td>
      <td>1467499</td>
      <td>51832</td>
      <td>6968</td>
      <td>26299</td>
      <td>94045</td>
      <td>1260841</td>
      <td>27513</td>
      <td>-</td>
      <td>15879</td>
    </tr>
    <tr>
      <th>47</th>
      <td>52</td>
      <td>Did not report</td>
      <td>1832624</td>
      <td>112379</td>
      <td>174485</td>
      <td>256869</td>
      <td>361729</td>
      <td>682788</td>
      <td>46285</td>
      <td>198089</td>
      <td>26227564</td>
    </tr>
  </tbody>
</table>
</div>




```python

```


```python
file_3 = file_2.rename({0: 'Total',
               2: 'Age', 3: 'Age', 4: 'Age', 5: 'Age', 6: 'Age',
               8: 'Sex', 9: 'Sex',
              11: 'Hispanic origin and Race',
              12: 'Hispanic origin and Race',
              13: 'Hispanic origin and Race',
              14: 'Hispanic origin and Race',
              15: 'Hispanic origin and Race',
              17: 'Education',
              18: 'Education',
              19: 'Education',
              20: 'Education',
              22: 'Marital status',
              23: 'Marital status',
               24: 'Marital status',
               25: 'Marital status',
               26: 'Marital status',
              28: 'Presence of children under 18 years old',
              29: 'Presence of children under 18 years old',
              31: 'Respondent or household member experienced loss of employment income ',
              32: 'Respondent or household member experienced loss of employment income',
              33: 'Respondent or household member experienced loss of employment income',
              35: 'Respondent currently employed',
              36: 'Respondent currently employed',
              37: 'Respondent currently employed',
              39: 'Household income',
              40: 'Household income',
              41: 'Household income',
              42: 'Household income',
              43: 'Household income',
              44: 'Household income',
              45: 'Household income',
              46: 'Household income',
              47: 'Household income'})
file_3
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>index</th>
      <th>Characteristics</th>
      <th>Total</th>
      <th>Occupied without rent</th>
      <th>No confidence</th>
      <th>Slight confidence</th>
      <th>Moderate confidence</th>
      <th>High confidence</th>
      <th>Payment is/will be deferred</th>
      <th>Did not report</th>
      <th>Did not report to tenure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Total</th>
      <td>5</td>
      <td>Total</td>
      <td>75266101</td>
      <td>3798689</td>
      <td>8918242</td>
      <td>12571649</td>
      <td>18070862</td>
      <td>30643777</td>
      <td>938815</td>
      <td>324066</td>
      <td>26676331</td>
    </tr>
    <tr>
      <th>1</th>
      <td>6</td>
      <td>Age</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>7</td>
      <td>18 - 24</td>
      <td>7313446</td>
      <td>286454</td>
      <td>639268</td>
      <td>1172462</td>
      <td>2366278</td>
      <td>2756071</td>
      <td>72011</td>
      <td>20902</td>
      <td>2625570</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>8</td>
      <td>25 - 39</td>
      <td>33959243</td>
      <td>1546625</td>
      <td>4399374</td>
      <td>5968053</td>
      <td>7623589</td>
      <td>13842252</td>
      <td>500551</td>
      <td>78798</td>
      <td>8137828</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>9</td>
      <td>40 - 54</td>
      <td>17607031</td>
      <td>969268</td>
      <td>2469898</td>
      <td>3292263</td>
      <td>4272341</td>
      <td>6251731</td>
      <td>282027</td>
      <td>69504</td>
      <td>6160146</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>10</td>
      <td>55 - 64</td>
      <td>9157888</td>
      <td>501794</td>
      <td>989617</td>
      <td>1423160</td>
      <td>2213671</td>
      <td>3897265</td>
      <td>51138</td>
      <td>81243</td>
      <td>4476699</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>11</td>
      <td>65 and above</td>
      <td>7228493</td>
      <td>494549</td>
      <td>420084</td>
      <td>715712</td>
      <td>1594982</td>
      <td>3896458</td>
      <td>33088</td>
      <td>73620</td>
      <td>5276088</td>
    </tr>
    <tr>
      <th>7</th>
      <td>12</td>
      <td>Sex</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Sex</th>
      <td>13</td>
      <td>Male</td>
      <td>34772104</td>
      <td>1917582</td>
      <td>4169523</td>
      <td>5147850</td>
      <td>8134709</td>
      <td>14857509</td>
      <td>514882</td>
      <td>30049</td>
      <td>11927883</td>
    </tr>
    <tr>
      <th>Sex</th>
      <td>14</td>
      <td>Female</td>
      <td>40493997</td>
      <td>1881108</td>
      <td>4748719</td>
      <td>7423800</td>
      <td>9936152</td>
      <td>15786268</td>
      <td>423933</td>
      <td>294018</td>
      <td>14748448</td>
    </tr>
    <tr>
      <th>10</th>
      <td>15</td>
      <td>Hispanic origin and Race</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>16</td>
      <td>Hispanic or Latino (may be of any race)</td>
      <td>16075749</td>
      <td>708252</td>
      <td>2723391</td>
      <td>3765786</td>
      <td>4289939</td>
      <td>4383535</td>
      <td>115420</td>
      <td>89427</td>
      <td>5834066</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>17</td>
      <td>White alone, not Hispanic</td>
      <td>37772948</td>
      <td>2119711</td>
      <td>3020518</td>
      <td>4193252</td>
      <td>8471643</td>
      <td>19355953</td>
      <td>528322</td>
      <td>83550</td>
      <td>14293951</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>18</td>
      <td>Black alone, not Hispanic</td>
      <td>14221712</td>
      <td>650218</td>
      <td>2331905</td>
      <td>3340880</td>
      <td>3580659</td>
      <td>3952208</td>
      <td>220040</td>
      <td>145803</td>
      <td>4084623</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>19</td>
      <td>Asian alone, not Hispanic</td>
      <td>3215458</td>
      <td>122829</td>
      <td>308873</td>
      <td>626124</td>
      <td>609280</td>
      <td>1530841</td>
      <td>16760</td>
      <td>751</td>
      <td>1400182</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>20</td>
      <td>Two or more races + Other races, not Hispanic</td>
      <td>3980236</td>
      <td>197681</td>
      <td>533556</td>
      <td>645608</td>
      <td>1119341</td>
      <td>1421240</td>
      <td>58273</td>
      <td>4536</td>
      <td>1063508</td>
    </tr>
    <tr>
      <th>16</th>
      <td>21</td>
      <td>Education</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>22</td>
      <td>Less than high school</td>
      <td>7630908</td>
      <td>513201</td>
      <td>1482489</td>
      <td>1871459</td>
      <td>1973579</td>
      <td>1588923</td>
      <td>55419</td>
      <td>145838</td>
      <td>3033298</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>23</td>
      <td>High school or GED</td>
      <td>26587535</td>
      <td>1279935</td>
      <td>3706781</td>
      <td>5046450</td>
      <td>6599701</td>
      <td>9522006</td>
      <td>343938</td>
      <td>88723</td>
      <td>10016935</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>24</td>
      <td>Some college/associate’s degree</td>
      <td>24354295</td>
      <td>1322092</td>
      <td>2792612</td>
      <td>4232609</td>
      <td>6489522</td>
      <td>9112126</td>
      <td>332959</td>
      <td>72375</td>
      <td>7735679</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>25</td>
      <td>Bachelor’s degree or higher</td>
      <td>16693364</td>
      <td>683462</td>
      <td>936360</td>
      <td>1421132</td>
      <td>3008059</td>
      <td>10420722</td>
      <td>206499</td>
      <td>17130</td>
      <td>5890419</td>
    </tr>
    <tr>
      <th>21</th>
      <td>26</td>
      <td>Marital status</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>27</td>
      <td>Married</td>
      <td>25834503</td>
      <td>1177934</td>
      <td>2965813</td>
      <td>3819950</td>
      <td>5805097</td>
      <td>11777371</td>
      <td>219162</td>
      <td>69175</td>
      <td>12803992</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>28</td>
      <td>Widowed</td>
      <td>2202944</td>
      <td>129374</td>
      <td>222984</td>
      <td>349965</td>
      <td>382827</td>
      <td>1104429</td>
      <td>12613</td>
      <td>751</td>
      <td>1533592</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>29</td>
      <td>Divorced/separated</td>
      <td>15201104</td>
      <td>935960</td>
      <td>1930192</td>
      <td>2694637</td>
      <td>3655383</td>
      <td>5611630</td>
      <td>259105</td>
      <td>114198</td>
      <td>3731480</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>30</td>
      <td>Never married</td>
      <td>31865484</td>
      <td>1503222</td>
      <td>3791412</td>
      <td>5677647</td>
      <td>8207982</td>
      <td>12112585</td>
      <td>447936</td>
      <td>124700</td>
      <td>7489643</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>31</td>
      <td>Did not report</td>
      <td>162066</td>
      <td>52199</td>
      <td>7842</td>
      <td>29451</td>
      <td>19572</td>
      <td>37762</td>
      <td>-</td>
      <td>15241</td>
      <td>1117623</td>
    </tr>
    <tr>
      <th>27</th>
      <td>32</td>
      <td>Presence of children under 18 years old</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Presence of children under 18 years old</th>
      <td>33</td>
      <td>Children in household</td>
      <td>32906303</td>
      <td>1723646</td>
      <td>5027156</td>
      <td>6777250</td>
      <td>8111053</td>
      <td>10689768</td>
      <td>452199</td>
      <td>125231</td>
      <td>11427501</td>
    </tr>
    <tr>
      <th>Presence of children under 18 years old</th>
      <td>34</td>
      <td>No children</td>
      <td>42359798</td>
      <td>2075043</td>
      <td>3891086</td>
      <td>5794399</td>
      <td>9959809</td>
      <td>19954009</td>
      <td>486617</td>
      <td>198836</td>
      <td>15248829</td>
    </tr>
    <tr>
      <th>30</th>
      <td>35</td>
      <td>Respondent or household member experienced los...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Respondent or household member experienced loss of employment income</th>
      <td>36</td>
      <td>Yes</td>
      <td>41321638</td>
      <td>2021026</td>
      <td>7408049</td>
      <td>9045115</td>
      <td>10963049</td>
      <td>11226544</td>
      <td>492088</td>
      <td>165766</td>
      <td>12672258</td>
    </tr>
    <tr>
      <th>Respondent or household member experienced loss of employment income</th>
      <td>37</td>
      <td>No</td>
      <td>33841565</td>
      <td>1776290</td>
      <td>1510193</td>
      <td>3520496</td>
      <td>7098074</td>
      <td>19333237</td>
      <td>446727</td>
      <td>156548</td>
      <td>12877152</td>
    </tr>
    <tr>
      <th>Respondent or household member experienced loss of employment income</th>
      <td>38</td>
      <td>Did not report</td>
      <td>102898</td>
      <td>1373</td>
      <td>-</td>
      <td>6038</td>
      <td>9738</td>
      <td>83997</td>
      <td>-</td>
      <td>1752</td>
      <td>1126920</td>
    </tr>
    <tr>
      <th>34</th>
      <td>39</td>
      <td>Respondent currently employed</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Respondent currently employed</th>
      <td>40</td>
      <td>Yes</td>
      <td>39313969</td>
      <td>1352887</td>
      <td>3021359</td>
      <td>5671822</td>
      <td>9241154</td>
      <td>19426974</td>
      <td>524342</td>
      <td>75432</td>
      <td>12821000</td>
    </tr>
    <tr>
      <th>Respondent currently employed</th>
      <td>41</td>
      <td>No</td>
      <td>35828698</td>
      <td>2443357</td>
      <td>5885026</td>
      <td>6862370</td>
      <td>8827869</td>
      <td>11148719</td>
      <td>414473</td>
      <td>246882</td>
      <td>12471720</td>
    </tr>
    <tr>
      <th>Respondent currently employed</th>
      <td>42</td>
      <td>Did not report</td>
      <td>123434</td>
      <td>2445</td>
      <td>11857</td>
      <td>37457</td>
      <td>1838</td>
      <td>68084</td>
      <td>-</td>
      <td>1752</td>
      <td>1383610</td>
    </tr>
    <tr>
      <th>38</th>
      <td>43</td>
      <td>Household income</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>44</td>
      <td>Less than $25,000</td>
      <td>21689403</td>
      <td>1670355</td>
      <td>3674597</td>
      <td>4503163</td>
      <td>5662511</td>
      <td>5753678</td>
      <td>356632</td>
      <td>68466</td>
      <td>154249</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>45</td>
      <td>$25,000 - $34,999</td>
      <td>12988376</td>
      <td>783383</td>
      <td>1737369</td>
      <td>2787412</td>
      <td>3398243</td>
      <td>4204783</td>
      <td>77185</td>
      <td>-</td>
      <td>66443</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>46</td>
      <td>$35,000 - $49,999</td>
      <td>11602952</td>
      <td>376157</td>
      <td>1545670</td>
      <td>2066892</td>
      <td>3066365</td>
      <td>4479861</td>
      <td>68006</td>
      <td>-</td>
      <td>40117</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>47</td>
      <td>$50,000 - $74,999</td>
      <td>11880529</td>
      <td>359512</td>
      <td>1149608</td>
      <td>1853850</td>
      <td>2877970</td>
      <td>5474198</td>
      <td>164259</td>
      <td>1131</td>
      <td>104523</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>48</td>
      <td>$75,000 - $99,999</td>
      <td>6442384</td>
      <td>205200</td>
      <td>394303</td>
      <td>711095</td>
      <td>1269592</td>
      <td>3773428</td>
      <td>88765</td>
      <td>-</td>
      <td>33749</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>49</td>
      <td>$100,000 - $149,999</td>
      <td>5653816</td>
      <td>188250</td>
      <td>187964</td>
      <td>310039</td>
      <td>1136326</td>
      <td>3678059</td>
      <td>96797</td>
      <td>56380</td>
      <td>22708</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>50</td>
      <td>$150,000 - $199,999</td>
      <td>1708519</td>
      <td>51620</td>
      <td>47277</td>
      <td>56030</td>
      <td>204079</td>
      <td>1336142</td>
      <td>13371</td>
      <td>-</td>
      <td>11099</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>51</td>
      <td>$200,000 and above</td>
      <td>1467499</td>
      <td>51832</td>
      <td>6968</td>
      <td>26299</td>
      <td>94045</td>
      <td>1260841</td>
      <td>27513</td>
      <td>-</td>
      <td>15879</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>52</td>
      <td>Did not report</td>
      <td>1832624</td>
      <td>112379</td>
      <td>174485</td>
      <td>256869</td>
      <td>361729</td>
      <td>682788</td>
      <td>46285</td>
      <td>198089</td>
      <td>26227564</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Dropping categorical rows with no values in columns

file_4 = file_3.drop([1,7,10,16,21,27,30,34,38])
file_4
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>index</th>
      <th>Characteristics</th>
      <th>Total</th>
      <th>Occupied without rent</th>
      <th>No confidence</th>
      <th>Slight confidence</th>
      <th>Moderate confidence</th>
      <th>High confidence</th>
      <th>Payment is/will be deferred</th>
      <th>Did not report</th>
      <th>Did not report to tenure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Total</th>
      <td>5</td>
      <td>Total</td>
      <td>75266101</td>
      <td>3798689</td>
      <td>8918242</td>
      <td>12571649</td>
      <td>18070862</td>
      <td>30643777</td>
      <td>938815</td>
      <td>324066</td>
      <td>26676331</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>7</td>
      <td>18 - 24</td>
      <td>7313446</td>
      <td>286454</td>
      <td>639268</td>
      <td>1172462</td>
      <td>2366278</td>
      <td>2756071</td>
      <td>72011</td>
      <td>20902</td>
      <td>2625570</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>8</td>
      <td>25 - 39</td>
      <td>33959243</td>
      <td>1546625</td>
      <td>4399374</td>
      <td>5968053</td>
      <td>7623589</td>
      <td>13842252</td>
      <td>500551</td>
      <td>78798</td>
      <td>8137828</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>9</td>
      <td>40 - 54</td>
      <td>17607031</td>
      <td>969268</td>
      <td>2469898</td>
      <td>3292263</td>
      <td>4272341</td>
      <td>6251731</td>
      <td>282027</td>
      <td>69504</td>
      <td>6160146</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>10</td>
      <td>55 - 64</td>
      <td>9157888</td>
      <td>501794</td>
      <td>989617</td>
      <td>1423160</td>
      <td>2213671</td>
      <td>3897265</td>
      <td>51138</td>
      <td>81243</td>
      <td>4476699</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>11</td>
      <td>65 and above</td>
      <td>7228493</td>
      <td>494549</td>
      <td>420084</td>
      <td>715712</td>
      <td>1594982</td>
      <td>3896458</td>
      <td>33088</td>
      <td>73620</td>
      <td>5276088</td>
    </tr>
    <tr>
      <th>Sex</th>
      <td>13</td>
      <td>Male</td>
      <td>34772104</td>
      <td>1917582</td>
      <td>4169523</td>
      <td>5147850</td>
      <td>8134709</td>
      <td>14857509</td>
      <td>514882</td>
      <td>30049</td>
      <td>11927883</td>
    </tr>
    <tr>
      <th>Sex</th>
      <td>14</td>
      <td>Female</td>
      <td>40493997</td>
      <td>1881108</td>
      <td>4748719</td>
      <td>7423800</td>
      <td>9936152</td>
      <td>15786268</td>
      <td>423933</td>
      <td>294018</td>
      <td>14748448</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>16</td>
      <td>Hispanic or Latino (may be of any race)</td>
      <td>16075749</td>
      <td>708252</td>
      <td>2723391</td>
      <td>3765786</td>
      <td>4289939</td>
      <td>4383535</td>
      <td>115420</td>
      <td>89427</td>
      <td>5834066</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>17</td>
      <td>White alone, not Hispanic</td>
      <td>37772948</td>
      <td>2119711</td>
      <td>3020518</td>
      <td>4193252</td>
      <td>8471643</td>
      <td>19355953</td>
      <td>528322</td>
      <td>83550</td>
      <td>14293951</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>18</td>
      <td>Black alone, not Hispanic</td>
      <td>14221712</td>
      <td>650218</td>
      <td>2331905</td>
      <td>3340880</td>
      <td>3580659</td>
      <td>3952208</td>
      <td>220040</td>
      <td>145803</td>
      <td>4084623</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>19</td>
      <td>Asian alone, not Hispanic</td>
      <td>3215458</td>
      <td>122829</td>
      <td>308873</td>
      <td>626124</td>
      <td>609280</td>
      <td>1530841</td>
      <td>16760</td>
      <td>751</td>
      <td>1400182</td>
    </tr>
    <tr>
      <th>Hispanic origin and Race</th>
      <td>20</td>
      <td>Two or more races + Other races, not Hispanic</td>
      <td>3980236</td>
      <td>197681</td>
      <td>533556</td>
      <td>645608</td>
      <td>1119341</td>
      <td>1421240</td>
      <td>58273</td>
      <td>4536</td>
      <td>1063508</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>22</td>
      <td>Less than high school</td>
      <td>7630908</td>
      <td>513201</td>
      <td>1482489</td>
      <td>1871459</td>
      <td>1973579</td>
      <td>1588923</td>
      <td>55419</td>
      <td>145838</td>
      <td>3033298</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>23</td>
      <td>High school or GED</td>
      <td>26587535</td>
      <td>1279935</td>
      <td>3706781</td>
      <td>5046450</td>
      <td>6599701</td>
      <td>9522006</td>
      <td>343938</td>
      <td>88723</td>
      <td>10016935</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>24</td>
      <td>Some college/associate’s degree</td>
      <td>24354295</td>
      <td>1322092</td>
      <td>2792612</td>
      <td>4232609</td>
      <td>6489522</td>
      <td>9112126</td>
      <td>332959</td>
      <td>72375</td>
      <td>7735679</td>
    </tr>
    <tr>
      <th>Education</th>
      <td>25</td>
      <td>Bachelor’s degree or higher</td>
      <td>16693364</td>
      <td>683462</td>
      <td>936360</td>
      <td>1421132</td>
      <td>3008059</td>
      <td>10420722</td>
      <td>206499</td>
      <td>17130</td>
      <td>5890419</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>27</td>
      <td>Married</td>
      <td>25834503</td>
      <td>1177934</td>
      <td>2965813</td>
      <td>3819950</td>
      <td>5805097</td>
      <td>11777371</td>
      <td>219162</td>
      <td>69175</td>
      <td>12803992</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>28</td>
      <td>Widowed</td>
      <td>2202944</td>
      <td>129374</td>
      <td>222984</td>
      <td>349965</td>
      <td>382827</td>
      <td>1104429</td>
      <td>12613</td>
      <td>751</td>
      <td>1533592</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>29</td>
      <td>Divorced/separated</td>
      <td>15201104</td>
      <td>935960</td>
      <td>1930192</td>
      <td>2694637</td>
      <td>3655383</td>
      <td>5611630</td>
      <td>259105</td>
      <td>114198</td>
      <td>3731480</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>30</td>
      <td>Never married</td>
      <td>31865484</td>
      <td>1503222</td>
      <td>3791412</td>
      <td>5677647</td>
      <td>8207982</td>
      <td>12112585</td>
      <td>447936</td>
      <td>124700</td>
      <td>7489643</td>
    </tr>
    <tr>
      <th>Marital status</th>
      <td>31</td>
      <td>Did not report</td>
      <td>162066</td>
      <td>52199</td>
      <td>7842</td>
      <td>29451</td>
      <td>19572</td>
      <td>37762</td>
      <td>-</td>
      <td>15241</td>
      <td>1117623</td>
    </tr>
    <tr>
      <th>Presence of children under 18 years old</th>
      <td>33</td>
      <td>Children in household</td>
      <td>32906303</td>
      <td>1723646</td>
      <td>5027156</td>
      <td>6777250</td>
      <td>8111053</td>
      <td>10689768</td>
      <td>452199</td>
      <td>125231</td>
      <td>11427501</td>
    </tr>
    <tr>
      <th>Presence of children under 18 years old</th>
      <td>34</td>
      <td>No children</td>
      <td>42359798</td>
      <td>2075043</td>
      <td>3891086</td>
      <td>5794399</td>
      <td>9959809</td>
      <td>19954009</td>
      <td>486617</td>
      <td>198836</td>
      <td>15248829</td>
    </tr>
    <tr>
      <th>Respondent or household member experienced loss of employment income</th>
      <td>36</td>
      <td>Yes</td>
      <td>41321638</td>
      <td>2021026</td>
      <td>7408049</td>
      <td>9045115</td>
      <td>10963049</td>
      <td>11226544</td>
      <td>492088</td>
      <td>165766</td>
      <td>12672258</td>
    </tr>
    <tr>
      <th>Respondent or household member experienced loss of employment income</th>
      <td>37</td>
      <td>No</td>
      <td>33841565</td>
      <td>1776290</td>
      <td>1510193</td>
      <td>3520496</td>
      <td>7098074</td>
      <td>19333237</td>
      <td>446727</td>
      <td>156548</td>
      <td>12877152</td>
    </tr>
    <tr>
      <th>Respondent or household member experienced loss of employment income</th>
      <td>38</td>
      <td>Did not report</td>
      <td>102898</td>
      <td>1373</td>
      <td>-</td>
      <td>6038</td>
      <td>9738</td>
      <td>83997</td>
      <td>-</td>
      <td>1752</td>
      <td>1126920</td>
    </tr>
    <tr>
      <th>Respondent currently employed</th>
      <td>40</td>
      <td>Yes</td>
      <td>39313969</td>
      <td>1352887</td>
      <td>3021359</td>
      <td>5671822</td>
      <td>9241154</td>
      <td>19426974</td>
      <td>524342</td>
      <td>75432</td>
      <td>12821000</td>
    </tr>
    <tr>
      <th>Respondent currently employed</th>
      <td>41</td>
      <td>No</td>
      <td>35828698</td>
      <td>2443357</td>
      <td>5885026</td>
      <td>6862370</td>
      <td>8827869</td>
      <td>11148719</td>
      <td>414473</td>
      <td>246882</td>
      <td>12471720</td>
    </tr>
    <tr>
      <th>Respondent currently employed</th>
      <td>42</td>
      <td>Did not report</td>
      <td>123434</td>
      <td>2445</td>
      <td>11857</td>
      <td>37457</td>
      <td>1838</td>
      <td>68084</td>
      <td>-</td>
      <td>1752</td>
      <td>1383610</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>44</td>
      <td>Less than $25,000</td>
      <td>21689403</td>
      <td>1670355</td>
      <td>3674597</td>
      <td>4503163</td>
      <td>5662511</td>
      <td>5753678</td>
      <td>356632</td>
      <td>68466</td>
      <td>154249</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>45</td>
      <td>$25,000 - $34,999</td>
      <td>12988376</td>
      <td>783383</td>
      <td>1737369</td>
      <td>2787412</td>
      <td>3398243</td>
      <td>4204783</td>
      <td>77185</td>
      <td>-</td>
      <td>66443</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>46</td>
      <td>$35,000 - $49,999</td>
      <td>11602952</td>
      <td>376157</td>
      <td>1545670</td>
      <td>2066892</td>
      <td>3066365</td>
      <td>4479861</td>
      <td>68006</td>
      <td>-</td>
      <td>40117</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>47</td>
      <td>$50,000 - $74,999</td>
      <td>11880529</td>
      <td>359512</td>
      <td>1149608</td>
      <td>1853850</td>
      <td>2877970</td>
      <td>5474198</td>
      <td>164259</td>
      <td>1131</td>
      <td>104523</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>48</td>
      <td>$75,000 - $99,999</td>
      <td>6442384</td>
      <td>205200</td>
      <td>394303</td>
      <td>711095</td>
      <td>1269592</td>
      <td>3773428</td>
      <td>88765</td>
      <td>-</td>
      <td>33749</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>49</td>
      <td>$100,000 - $149,999</td>
      <td>5653816</td>
      <td>188250</td>
      <td>187964</td>
      <td>310039</td>
      <td>1136326</td>
      <td>3678059</td>
      <td>96797</td>
      <td>56380</td>
      <td>22708</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>50</td>
      <td>$150,000 - $199,999</td>
      <td>1708519</td>
      <td>51620</td>
      <td>47277</td>
      <td>56030</td>
      <td>204079</td>
      <td>1336142</td>
      <td>13371</td>
      <td>-</td>
      <td>11099</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>51</td>
      <td>$200,000 and above</td>
      <td>1467499</td>
      <td>51832</td>
      <td>6968</td>
      <td>26299</td>
      <td>94045</td>
      <td>1260841</td>
      <td>27513</td>
      <td>-</td>
      <td>15879</td>
    </tr>
    <tr>
      <th>Household income</th>
      <td>52</td>
      <td>Did not report</td>
      <td>1832624</td>
      <td>112379</td>
      <td>174485</td>
      <td>256869</td>
      <td>361729</td>
      <td>682788</td>
      <td>46285</td>
      <td>198089</td>
      <td>26227564</td>
    </tr>
  </tbody>
</table>
</div>




```python
# find out about other work sheets
#df1 = pd.read_excel(house_file, 'AZ')
```


```python
#Create a new function:
def num_missing(x):
  return sum(x.isnull())
```


```python
#Applying per column:
print ("Missing values per column:")
print (file_4.apply(num_missing, axis=0)) #axis=0 defines that function is to be applied on each column

```

    Missing values per column:
    index                          0
    Characteristics                0
    Total                          0
    Occupied without rent          0
    No confidence                  0
    Slight confidence              0
    Moderate confidence            0
    High confidence                0
    Payment is/will be deferred    0
    Did not report                 0
    Did not report to tenure       0
    dtype: int64



```python
#Applying per row:
print ("\nMissing values per row:")
print (house_file.apply(num_missing, axis=1).head()) #axis=1 defines that function is to be applied on each row

```

    
    Missing values per row:
    0     9
    1     9
    2     0
    3     4
    4    10
    dtype: int64



```python
file_4.to_csv(r'/Users/nadezdachikurova/Desktop/New_house.csv')
```

### Imputing missing values using Pandas




```python
#First we import scipy function to determine the mode
from scipy.stats import mode
mode(house_file['Gender'])
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    /Applications/anaconda3/lib/python3.7/site-packages/pandas/core/indexes/base.py in get_loc(self, key, method, tolerance)
       3077             try:
    -> 3078                 return self._engine.get_loc(key)
       3079             except KeyError:


    pandas/_libs/index.pyx in pandas._libs.index.IndexEngine.get_loc()


    pandas/_libs/index.pyx in pandas._libs.index.IndexEngine.get_loc()


    pandas/_libs/hashtable_class_helper.pxi in pandas._libs.hashtable.PyObjectHashTable.get_item()


    pandas/_libs/hashtable_class_helper.pxi in pandas._libs.hashtable.PyObjectHashTable.get_item()


    KeyError: 'Gender'

    
    During handling of the above exception, another exception occurred:


    KeyError                                  Traceback (most recent call last)

    <ipython-input-13-c1247f77e3a1> in <module>
          1 #First we import scipy function to determine the mode
          2 from scipy.stats import mode
    ----> 3 mode(house_file['Gender'])
    

    /Applications/anaconda3/lib/python3.7/site-packages/pandas/core/frame.py in __getitem__(self, key)
       2686             return self._getitem_multilevel(key)
       2687         else:
    -> 2688             return self._getitem_column(key)
       2689 
       2690     def _getitem_column(self, key):


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/core/frame.py in _getitem_column(self, key)
       2693         # get column
       2694         if self.columns.is_unique:
    -> 2695             return self._get_item_cache(key)
       2696 
       2697         # duplicate columns & possible reduce dimensionality


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/core/generic.py in _get_item_cache(self, item)
       2487         res = cache.get(item)
       2488         if res is None:
    -> 2489             values = self._data.get(item)
       2490             res = self._box_item_values(item, values)
       2491             cache[item] = res


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/core/internals.py in get(self, item, fastpath)
       4113 
       4114             if not isna(item):
    -> 4115                 loc = self.items.get_loc(item)
       4116             else:
       4117                 indexer = np.arange(len(self.items))[isna(self.items)]


    /Applications/anaconda3/lib/python3.7/site-packages/pandas/core/indexes/base.py in get_loc(self, key, method, tolerance)
       3078                 return self._engine.get_loc(key)
       3079             except KeyError:
    -> 3080                 return self._engine.get_loc(self._maybe_cast_indexer(key))
       3081 
       3082         indexer = self.get_indexer([key], method=method, tolerance=tolerance)


    pandas/_libs/index.pyx in pandas._libs.index.IndexEngine.get_loc()


    pandas/_libs/index.pyx in pandas._libs.index.IndexEngine.get_loc()


    pandas/_libs/hashtable_class_helper.pxi in pandas._libs.hashtable.PyObjectHashTable.get_item()


    pandas/_libs/hashtable_class_helper.pxi in pandas._libs.hashtable.PyObjectHashTable.get_item()


    KeyError: 'Gender'



```python

```


```python

```


```python

```

### [Get JSON from Excel using Python, xlrd](https://anthonydebarros.com/2013/02/05/get-json-from-excel-using-python-xlrd/)



```python
import xlrd
```


```python
# Open the workbook
xlrd_file = xlrd.open_workbook('/Users/nadezdachikurova/Downloads/housing2b_week1.xlsx')
```


```python
# Print the sheet names
print (xlrd_file.sheet_names())
```

    ['US', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'Boston_Metro_Area', 'Atlanta_Metro_Area', 'Los.Angeles_Metro_Area', 'Phoenix_Metro_Area', 'New.York_Metro_Area', 'San.Francisco_Metro_Area', 'Chicago_Metro_Area', 'Dallas_Metro_Area', 'Riverside_Metro_Area', 'Detroit_Metro_Area', 'Houston_Metro_Area', 'Washington.DC_Metro_Area', 'Philadelphia_Metro_Area', 'Seattle_Metro_Area', 'Miami_Metro_Area']



```python
# Get the first sheet either by index or by name
print(xlrd_file.sheet_by_index(1))
```

    <xlrd.sheet.Sheet object at 0x7f8654cc6080>



```python
sh = xlrd_file.sheet_by_index(0)
sh
```




    <xlrd.sheet.Sheet at 0x7f8654cc60b8>




```python
# Iterate through rows, returning each as a list that you can index:
for rownum in range(sh.nrows):
    print (sh.row_values(rownum))
```

    ["Housing Table 2b. Confidence in Ability to Make Next Month's Payment for Renter-Occupied Housing Units, by Select Characteristics: United States", '', '', '', '', '', '', '', '', '']
    ['Source: U.S. Census Bureau Household Pulse Survey, Week 1.', '', '', '', '', '', '', '', '', '']
    ['Total Population 18 Years and Older in Renter-Occupied Housing Units', '', '', '', '', '', '', '', '', '']
    ['Select characteristics', 'Total', 'Occupied without rent', 'Confidence to pay next month’s rent', 'Confidence to pay next month’s rent', 'Confidence to pay next month’s rent', 'Confidence to pay next month’s rent', 'Confidence to pay next month’s rent', 'Confidence to pay next month’s rent', 'Did not report to tenure']
    ['', '', '', 'No confidence', 'Slight confidence', 'Moderate confidence', 'High confidence', 'Payment is/will be deferred', 'Did not report', '']
    ['', '', '', '', '', '', '', '', '', '']
    ['Total', 75266101.0, 3798689.0, 8918242.0, 12571649.0, 18070862.0, 30643777.0, 938815.0, 324066.0, 26676331.0]
    ['Age ', '', '', '', '', '', '', '', '', '']
    ['    18 - 24', 7313446.0, 286454.0, 639268.0, 1172462.0, 2366278.0, 2756071.0, 72011.0, 20902.0, 2625570.0]
    ['    25 - 39', 33959243.0, 1546625.0, 4399374.0, 5968053.0, 7623589.0, 13842252.0, 500551.0, 78798.0, 8137828.0]
    ['    40 - 54', 17607031.0, 969268.0, 2469898.0, 3292263.0, 4272341.0, 6251731.0, 282027.0, 69504.0, 6160146.0]
    ['    55 - 64', 9157888.0, 501794.0, 989617.0, 1423160.0, 2213671.0, 3897265.0, 51138.0, 81243.0, 4476699.0]
    ['    65 and above', 7228493.0, 494549.0, 420084.0, 715712.0, 1594982.0, 3896458.0, 33088.0, 73620.0, 5276088.0]
    ['Sex ', '', '', '', '', '', '', '', '', '']
    ['    Male', 34772104.0, 1917582.0, 4169523.0, 5147850.0, 8134709.0, 14857509.0, 514882.0, 30049.0, 11927883.0]
    ['    Female', 40493997.0, 1881108.0, 4748719.0, 7423800.0, 9936152.0, 15786268.0, 423933.0, 294018.0, 14748448.0]
    ['Hispanic origin and Race ', '', '', '', '', '', '', '', '', '']
    ['    Hispanic or Latino (may be of any race)', 16075749.0, 708252.0, 2723391.0, 3765786.0, 4289939.0, 4383535.0, 115420.0, 89427.0, 5834066.0]
    ['    White alone, not Hispanic', 37772948.0, 2119711.0, 3020518.0, 4193252.0, 8471643.0, 19355953.0, 528322.0, 83550.0, 14293951.0]
    ['    Black alone, not Hispanic', 14221712.0, 650218.0, 2331905.0, 3340880.0, 3580659.0, 3952208.0, 220040.0, 145803.0, 4084623.0]
    ['    Asian alone, not Hispanic', 3215458.0, 122829.0, 308873.0, 626124.0, 609280.0, 1530841.0, 16760.0, 751.0, 1400182.0]
    ['    Two or more races + Other races, not Hispanic', 3980236.0, 197681.0, 533556.0, 645608.0, 1119341.0, 1421240.0, 58273.0, 4536.0, 1063508.0]
    ['Education ', '', '', '', '', '', '', '', '', '']
    ['    Less than high school', 7630908.0, 513201.0, 1482489.0, 1871459.0, 1973579.0, 1588923.0, 55419.0, 145838.0, 3033298.0]
    ['    High school or GED', 26587535.0, 1279935.0, 3706781.0, 5046450.0, 6599701.0, 9522006.0, 343938.0, 88723.0, 10016935.0]
    ['    Some college/associate’s degree', 24354295.0, 1322092.0, 2792612.0, 4232609.0, 6489522.0, 9112126.0, 332959.0, 72375.0, 7735679.0]
    ['    Bachelor’s degree or higher', 16693364.0, 683462.0, 936360.0, 1421132.0, 3008059.0, 10420722.0, 206499.0, 17130.0, 5890419.0]
    ['Marital status ', '', '', '', '', '', '', '', '', '']
    ['    Married', 25834503.0, 1177934.0, 2965813.0, 3819950.0, 5805097.0, 11777371.0, 219162.0, 69175.0, 12803992.0]
    ['    Widowed', 2202944.0, 129374.0, 222984.0, 349965.0, 382827.0, 1104429.0, 12613.0, 751.0, 1533592.0]
    ['    Divorced/separated', 15201104.0, 935960.0, 1930192.0, 2694637.0, 3655383.0, 5611630.0, 259105.0, 114198.0, 3731480.0]
    ['    Never married', 31865484.0, 1503222.0, 3791412.0, 5677647.0, 8207982.0, 12112585.0, 447936.0, 124700.0, 7489643.0]
    ['    Did not report', 162066.0, 52199.0, 7842.0, 29451.0, 19572.0, 37762.0, '-', 15241.0, 1117623.0]
    ['Presence of children under 18 years old ', '', '', '', '', '', '', '', '', '']
    ['    Children in household', 32906303.0, 1723646.0, 5027156.0, 6777250.0, 8111053.0, 10689768.0, 452199.0, 125231.0, 11427501.0]
    ['    No children', 42359798.0, 2075043.0, 3891086.0, 5794399.0, 9959809.0, 19954009.0, 486617.0, 198836.0, 15248829.0]
    ['Respondent or household member experienced loss of employment income ', '', '', '', '', '', '', '', '', '']
    ['    Yes', 41321638.0, 2021026.0, 7408049.0, 9045115.0, 10963049.0, 11226544.0, 492088.0, 165766.0, 12672258.0]
    ['    No', 33841565.0, 1776290.0, 1510193.0, 3520496.0, 7098074.0, 19333237.0, 446727.0, 156548.0, 12877152.0]
    ['    Did not report', 102898.0, 1373.0, '-', 6038.0, 9738.0, 83997.0, '-', 1752.0, 1126920.0]
    ['Respondent currently employed ', '', '', '', '', '', '', '', '', '']
    ['    Yes', 39313969.0, 1352887.0, 3021359.0, 5671822.0, 9241154.0, 19426974.0, 524342.0, 75432.0, 12821000.0]
    ['    No', 35828698.0, 2443357.0, 5885026.0, 6862370.0, 8827869.0, 11148719.0, 414473.0, 246882.0, 12471720.0]
    ['    Did not report', 123434.0, 2445.0, 11857.0, 37457.0, 1838.0, 68084.0, '-', 1752.0, 1383610.0]
    ['Household income ', '', '', '', '', '', '', '', '', '']
    ['    Less than $25,000', 21689403.0, 1670355.0, 3674597.0, 4503163.0, 5662511.0, 5753678.0, 356632.0, 68466.0, 154249.0]
    ['    $25,000 - $34,999', 12988376.0, 783383.0, 1737369.0, 2787412.0, 3398243.0, 4204783.0, 77185.0, '-', 66443.0]
    ['    $35,000 - $49,999', 11602952.0, 376157.0, 1545670.0, 2066892.0, 3066365.0, 4479861.0, 68006.0, '-', 40117.0]
    ['    $50,000 - $74,999', 11880529.0, 359512.0, 1149608.0, 1853850.0, 2877970.0, 5474198.0, 164259.0, 1131.0, 104523.0]
    ['    $75,000 - $99,999', 6442384.0, 205200.0, 394303.0, 711095.0, 1269592.0, 3773428.0, 88765.0, '-', 33749.0]
    ['    $100,000 - $149,999', 5653816.0, 188250.0, 187964.0, 310039.0, 1136326.0, 3678059.0, 96797.0, 56380.0, 22708.0]
    ['    $150,000 - $199,999', 1708519.0, 51620.0, 47277.0, 56030.0, 204079.0, 1336142.0, 13371.0, '-', 11099.0]
    ['    $200,000 and above', 1467499.0, 51832.0, 6968.0, 26299.0, 94045.0, 1260841.0, 27513.0, '-', 15879.0]
    ['    Did not report', 1832624.0, 112379.0, 174485.0, 256869.0, 361729.0, 682788.0, 46285.0, 198089.0, 26227564.0]



```python
n_sh = sh.row_values(rownum).iloc[3:]
n_sh
```


```python
# If you just want the first column:
first_column = sh.col_values(0)
print (first_column)
```

    ["Housing Table 2b. Confidence in Ability to Make Next Month's Payment for Renter-Occupied Housing Units, by Select Characteristics: United States", 'Source: U.S. Census Bureau Household Pulse Survey, Week 1.', 'Total Population 18 Years and Older in Renter-Occupied Housing Units', 'Select characteristics', '', '', 'Total', 'Age ', '    18 - 24', '    25 - 39', '    40 - 54', '    55 - 64', '    65 and above', 'Sex ', '    Male', '    Female', 'Hispanic origin and Race ', '    Hispanic or Latino (may be of any race)', '    White alone, not Hispanic', '    Black alone, not Hispanic', '    Asian alone, not Hispanic', '    Two or more races + Other races, not Hispanic', 'Education ', '    Less than high school', '    High school or GED', '    Some college/associate’s degree', '    Bachelor’s degree or higher', 'Marital status ', '    Married', '    Widowed', '    Divorced/separated', '    Never married', '    Did not report', 'Presence of children under 18 years old ', '    Children in household', '    No children', 'Respondent or household member experienced loss of employment income ', '    Yes', '    No', '    Did not report', 'Respondent currently employed ', '    Yes', '    No', '    Did not report', 'Household income ', '    Less than $25,000', '    $25,000 - $34,999', '    $35,000 - $49,999', '    $50,000 - $74,999', '    $75,000 - $99,999', '    $100,000 - $149,999', '    $150,000 - $199,999', '    $200,000 and above', '    Did not report']



```python
# Index individual cells:
cell_c4 = sh.cell(3, 2).value
# Or you can use:
#cell_c4 = sh.cell(rowx=3, colx=2).value
print (cell_c4)
```

    Occupied without rent



```python
# Let's say you want the same cell from x identical sheets in a workbook:
x = 2
while x >= 0:
    sh = xlrd_file.sheet_by_index(x)
    cell_x = sh.cell(2, 3).value
    print (cell_x)
    #x = x - 1
```


```python

```


```python

```
