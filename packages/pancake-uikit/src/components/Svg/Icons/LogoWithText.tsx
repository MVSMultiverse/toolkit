/* eslint-disable react/self-closing-comp */
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <image id="v2_horizontal_copy" data-name="v2_horizontal copy" width="100%" height="100%" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8EAAAB4CAYAAADSZfAgAAAgAElEQVR4nO2dCfw1U/3HP/f3PNbHkrVCoSJJhUSlRRJCSkllSRIRsj+Wx5J9TVRE6l+RpSSVLBWSpJS0EEkiLZZk33qe373n/zr3fu+9M/M9M3fmzMy9M/d+3q/X8Py+58yZc+Zu8znne75fEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEFIFGsE+7PzIrePyorwEwKsBLA3g7wD+COAJVasevAbAKwHMB+BuAPZFatV0LLF8Zam14ooIIYQQQgghxItGo6FOm6ks9WYDAO8CsKkIx1kAHhERfAWAKwH8uSYjfC+A9wDYEMCKAKYA/AvALwFcBuCHAJ5UZxFCCCGEEEIIiWVcVoJXAfBZEY2DOAnAIQDMgHqjYiMAZwBYfcD1HwYwG8A3VEkN4UowIYQQQgghpGhcK8FTylI/7MrvnSkFsOUgALcAWEKVjJ4DAPwkhQC2LAvg6wDOUiWEEEIIIYQQQpzUXQSvDeDHAGaokmTseb/yOK9M9gVwikf7u9uFVGUlhBBCCCGEEKKouwj+qbKkZ1UA5w+7wzGsCeA0d1Eqdgaw9UhHQAghhBBCCCE1oM4ieA6AxZQ1Gx+R6Muj5pwCrn8ugPmVlRBCCCGEEEJIjzqL4IOVxY/Zw+54BCvC11XW7LwAwMdHNwxCCCGEEEIIqT51FcE7AlhEWf3YXlIQjQqffcBxzI5G/CaEEEIIIYQQ0qeuIvgkZcnH/sMegLASgE2U1Z+VAWw3/GEQQgghhBBCSD2oowi2qZBeqKz52EtSDg2bk0u43kHKQgghhBBCCCGkTR1F8OeVpRj2GvI4lgHwfmXNzxoA3jfksRBCCCGEEEJILaibCH6zuBCXwaEAFh3iWI4tMU/xqIN9EUIIIYQQQkglqZsILmsVGHIvdlTWcphPAnKVxZsAvHVIYyGEEEIIIYSQ2lAnEbwagNcra7HY1dkFhjCWowAsrKzFcugQxkEIIYQQQgghtaJOIvhLylI8iwP40BCu8yllKZ5NhzBpQAghhBBCCCG1oi4ieAUAGyhrORxf4l5dy4EitocBI0UTQgghhBBCSIC6iOAy9wJHWR7AZspaHAcMcSwfFDdyQgghhBBCCJl4UBMRPAvAVspaLseV1PpHR5CPeG9lIYQQQgghhJAJpQ4i+LPKUj6vKSm68meUpXx2EXdyQgghhBBCCJl4qi6C7d7cTyrrcDix4Ku8F8DKylo+9h7uNaJ7SAghhBBCCCGVouoi+BhlGR5vBrBWgVcry8U6DXsAWHqE1yeEEEIIIYSQSlB1ETzq6MbHK4sfNrL1q4fd+QB2X/WuykoIIYQQQgghE0aVRfDsCvTP5tpdVVmzU7RrtQ/7A1ikAv0ghBBCCCGEkJFRZRF8uLKMhjk5r7oGgPWUdfgsCWC7itxTQgghhBBCCBkJMyt623eo0KqlTWt0CIB/q5J0nDLsDidgV9e/AqAZX2V8aDQarrHYvMlvA7A6gJfKRFBL1QrTbehhAH8F8AcA1wGYVjXri/0ueCeA1wFYBcAyAIwcSdjAa88D+Ivcl58C+G9C/TRsDOBjABYDMDeh/gx5ba4EcLYqrSd27/6R8ho8l3D/7bgXBnAXgGPlvZmFdQB8GsBSAP6XcN6UvDd+DuAkVTpe2InCwwC8St7Tcfd+UplP7suFAC5LcQ+2BLA9gIUAzFOlfWbIvb4CwLmqNPxe3BHA++U7O83v2IIAHpCtTfeo0vHCbrvaWd7HSZ/pLg15bW6QLBxpzvFlAQAvB7CiZKtYVr57lpbvsRkV/rzNkP//GMCZqjSZ9wH4IIDFB/yWFUGjxHvYkOedp+RZuPss9GcAf1O1R8MS8vxitx4uD+AlAR1R1+9y+9m4D8AJAP6uSsvHvu4vk8+tfV5+oXy/2OfDReXZoKr3tiHfO7+VzDzO34uQStj5kVtVhRHxsNzkqvAFeWDMin3j3Bu9zyNmWwAXVag/bb6yVJExyDpERPB7ZFW/qFX5f8l9PFCV1A87UfMR+eHIyzMAfgLgE55ieH0ANyrrYCr5vs6Ifci/VX7Is2AnHjbMUH9lzweX40Qkjis3lJQabxzZGsClCePaAsDlyjqYXROE8DIekz1dnpOHNueD0Biwtjzs+fIWAL8o8Da8QTJirCW/K8tV7JnOl0NFkKTBBiT9Yu1GmJ175Dn3ZgDnyYT4sLATlp+S57pXjfGWv/tka2bSZGIRrCSTlxvIZNVyBT0XjprvAfim6zeriu7QW1Twy3IvmbXMykkVE8CQL/FJw87E/qBgt3T7xXAAgOtVSb24RsZR1BfdLJn9vlNWcrPyds/rFj+LMnyW8hDAkB//LKzoObJNlWW8WGXMx1ckbxnQlu/ncWNl6fMYgGuVNR12xfOsMm5ERTgvRzesgLlNWbNjvazOAfAnAL+WSefN5DttHAQwMj5D7K8s44ld4d9IXu+75JnoPSWPdBURNncA2FMmXcY55s1KsgpbBovK5PbN8l1wBoCt5J6OgwCG/F6tr6wVFcGfV5ZqsE/GXiwjbltVYw2ZaJgUrOvGt0scqxVtlyhrPbhYXKDLwL7//8+j3WeVJR3P1fQ1CNIQd9OsPJOxvu9s8uPKMl48OebjK5InBrT1tLKkI+k1mJbVNV92ld+DcWPTnNkn9hlw3wdhRdB3ZeJzV9lqNK4Met8Hqep2w7J5uyw6XFXS5203ccN+ryoZX1olLKjZ9k6XVWabjnZdVWN8eCzuN6lqInhdcdWrIgeLf35ajpY9VFVk1KmnhknSykJRbF3DVTLr7vIhZS2WD3hEVx+0PzuOcdi/mWYPtous5/jeK9/Xpi5wD3B6Bt2rst5jd8meZF++kuPcqnJOjn79TgSLL/vKatxWY3hfXWR5X5e5x7oObCpeAa8vsK92W+KXapDetWh8nw3ieLd8bvce04nBKLH3r2pvpC8pS3WYKUEn0jB/xSMxvyWFO9s4sIC45g6DKr93XXzNYSsD7rFMT6OC2ycmCd77euATn6PLVmPm9r6tBKzxZbcc59rJiNPkeYcQFy8C8JuCvAPeK666JB+HSjBRu31h4qmSCH6lBHeoMkeldHE5Qvzsq8whFe9fEdj305uGdK2Vhii487KR9HcYvKQm94QQ50wxqRz/lWjPvlwwRi9pnlXgq2Xvrg/XSjBFQgbRkP2mswbUS2JJ2QNM8nG8BLgkQpVEcB1W0paQmddB7D6gvArYgBVr1qCfeVhVItwNi7oEHcvzAJmVYYntcSDWZYcQEuKouD1eKXiDpMmrOwfkDAb0KWVJx7cyRqMnZJGcsVnyTPaQDrtOyOJXJqoigm0EsncoazUZNItyQI187Mf9A/HCIb/H3+CxB3bYLCf9HBZlRTQkhEwuc3PGtvi6stSPPJOZ35RIsFmxeZ+3GYN7R4bPZp7enktL3BXiz2qcSHBTFRFcRi61+yVBctGsMCDqcxlh8S8u6Q28zZjvCxjFXqUy3nNFkjbHYVHkcYGaNLgnmJD0fEnytfuwsgTuqysn5Ay86ZPffrExDSxGhscpHleaoywkKxfzjrmpggieVdJeyu+Iy1QZaS+OUZYOh0oggKKZkzOARRJ5goxUnVEIii0lJ2UVaXAWv9LQHXq0cAIiPVV4drCflV2UNT0+KdyqwIKSrcIXK6Af9Dj3eAk2OclMatqjorBu9K/I2FZZaRzrxIwc772tJVf3JDNf3KRhFX7IfGaG0nCa1DmxhLZXj9lT9Cplyc/9Abel60pof9cxSogdZRSCYlbOB5QyOVQeoIYJRR2pC4vxlUpNVQI/XiXRZ32wr/d+o+2+F3m8wp7yDIxjJ3Y/pqyTR5Y0mcTNRk6rG3u/X+YsmTye8hwx9wEn/F6NelZrRklBpK4MuEmdICu3M1StfBzvSDNkV1U/WPBs6UEBIWFdmH6rauTD3pc9+UEplJ0AHFnBfu2hLISQLreV5Mkzjvy0QmPaVfLd+nBKYMK8Dth4Ix/N0U87EfqMsg5mN25twUND3Ff5gDz3jdI7pXt9u61sKVXqj011dHbKs9fm+67NWRIVPytvrkHWnbKx33fHAvix6zqjFsFxbsV5ibr4npoziIaL9eXNdWug7DHJnbeTo74Pj0Yi6t0qKQ3WLXgsNmH2SQAeVyWTiX0d/wpgRQDLetyBl4gLyndUyeiwQSle7Hn1PwCYJ9HE6Q5GxpWt5LfDfn5bQ/JimCf7U322BNnvqMvj3LxKwE6Y/k8mmX8ypGum4fcAfghgC49zp8RbrKreO1HyBPR6KEcWjs2UxY/b5bhF3r8PSpTvac/2GkP4nE7JNe6V93+ZtGRL1VUlXycL80mWh/Vkkcfncxbk7RItOk1097yrwL+Vfey/lpXUKmXEGURDnrfsc/k/B9SN490x9qzcA+BO+dz+GcA/ZKvpvJh2gp/LYXxGXTTkN+sB0VJORv1AW4Yr0i/kBQtif+A+CeAFqnY+jnX8OBwiM7VFrDwfIl+KQWYDuF7VzMdCMtNbhut4HbErphdJVMJ/eQbYOqhiIvhoZUmHnYT5kNS0M2nvGmanJwwGxhotz4wgcJxlFU8RfENN3XnLYK8cD+cHyYS8zwrpMLGZB96T43r2d62prIOxImidnOP8gcRouVWVkCBWZF9RsTti+3SXHOfJdkD7er5c1UzHQvKdl8Z7I88K9CWMgeLctpmFmyXY69XD7fbwGOWsyH4lBVnYU1k6nKcs+bGzLK+MtPKQzM7nZTqmzz+TGZmiOXAE+0WrSnfW6JEc3gr2oWENZR0NNhDF6z2vHIwiWkaQOdKHgbEmk5d6jpp7mPvclzPLxLnKUj3Oz9GjPwK4VFnTsVHOBYQdxAWWAngwDZl8rzJ3iFfYszn6mHaMvhrBTvZsp6yTxYtyiuDPA3jjOAtgjFgEH6Ys+fmLuEa5OKYkVxbXXlqXLSt25e75mHOOUpb8LMkvjR7BPSh5UkKcriyjwScQiuUmCczWZdIjgxJSBlz9L4Y8zxQfybFdZBism3Mb1N7Kkp4Ncpy7h+QkJumpw/fB0wkLTmlYpOT+XZHgqjspvDXHOH+U8zujNoxKBNuE60soa34+ldDCI+IeUTQ7Su7gIH8uwGX5DGXp860cewSSYD62DsEfoQdjVuTTYEP7Lz6kPscxQ/YY+VD0PnpCCCmLJyTwky95VlrL5ms52r8m5/PIysqSjj9KQB+Sjbp4A9n96c8pazrSimDfe/FrZZk8VvQcsV3h31ZZx5RRieCTlSU//wZw7YBWDnXssS0CV1ANn2T0XU5L4XpaxmrwyhL4YNKJfvHm2SdYhsdDFnzTIv0dwI3KSggh1eUkCWzog520XKuCI9tc9mH6kje1ka8r9PHKQtJQF88QIxH1fSh7JTjOi3KSWNJzrD9OCiQ1boxCBG9RktvRXsqi+YdEkSyaPRxRhG/Jkb/wJGXRWDfd/yhrfqqY2mfU/Flm032IRiofNkneEUkckFBGCCFVpJXjOw8Vdd39srKk56uBdJG++AYnituaRsYH39e46JSlUZjFAlhGWdJx5bA7OkpGIYLL2Cdp3aC+q6xuysqHu6+yuFeIB2F/tB4eUKfLKcqSn1c7Il4XhwkfRo6K4ZqJ9Y2uPL+4zI+CLT3znv4vRxAVQggZJRdLJFsf7IrrphV69T4OYDllTU/eSdiG58O03UZ0t7KSNNQpOGLaZ9UoZY+RASb9c97foCxjzLBF8JtzhFVPIsuq1R0lpBiC7J+Mug1dJ6uIWcgSjfgUmQAomiN67cWI1tDRGnQYmCbQahq0WuHDyFEDbpS8hj6ManX9c8qSjs/wR2QkMEUSIcWQxjMsjipFij5VWdJzQs4IvhC3VZ+4FreXtPWMTBa+v4c+qcDGDZ+4S/91pJgda4YtgstYBW55RPA9Qlny05BZ2yifUZZ4rpC9mFkI/2AXI1rXM028MUm0huo7rtEyjcAxhRYaMJgK1GmEjhpg7+jhnt1cOUeKIl9ekyPR/BeUhQwDpkgipBh+kmNFwwa63ElZh8/sHAFEp3MGCeuyaCRbQlruG/7tIiOg7Ic334kU3/2w44TP5NU/5btjYhimCLb5dN+grPnxEbQ/L2m/ylGOIETJkZzDovVgl6DUIjV0HGFaZu6glVYP0XpkkmjtnBM8GqEj3H7nnHY5ZsgxheB5NcG6CD/l2dU8M/o+pNlX7uJsAM847IQQUid2y9HXKkQ1zhOQcQ9l8WMhz/2bZcQrIZPHoACxcVRpS8Oo8Jm8yus5UjuGKYLL+lHxfdj3i9qbvNK6iDHYwSFUj46stLrcg29otcztHqL1uZaZOm/QSquHaN20ZRqvjROtLdV+Q7Wpr9HQgriaIjhuNW5ejgeTDRzu8mVhZwDf7dk2I3oSQsaBO3PENljQM6ZHUZyQ4/nssZzBtIL4BhjyTZ1D6rUlJu5ZqSge8WxnbQCrKOtk4fM+mjg38mGJ4OUBbKis+Tlt4NJ9vGi9whj8pag9rYH6xxmD+SKi9dyWafxngHvwQTlE68HGNJpJK62eonVOnGh1He42pxw2fVSMpA6doyzpyeIanwff9FzXSgR1QggZB/KsiOYRonlYOKcAd23LGjbx3m9knPAVwWnFVp7galcBeJ2ykiSeTigbS4YVRvzzyhJH5CPl/IT1jTF7NK0ytCLTebbQ1jnWffkCVdRuoRGt2/m/aUVsqls2kuL7gca3IsUn96M5NwL1255GfwDwq07but3uOfGjafxXomP3cvz22o4NvRzsg7YL28iK+d29euqEcH/799w1jkagXvcfJqbuSFGjDPCoeDX4pOHYE8A+ylo8vhHQ8+S2JoSQqvGQBCb0zav/xZwpl3z4Uo5zbVTs7ynr8PmwpMKcGvB72qURU6/7cOAqQ+C8QfWSzht0zkxxE71oSOK+TnEhllaWdKTdVvYneeby2eP7ctn2eKEENZ0bKEt63ZPK4gi+/4LnR9vq1mtKLuMnxGPlDxVxRV4NwBz5d9w4omNF4G846mclzWc5TftTskj607a+iiG/CB4sWmfBWFGYRGrRGuTC4JvGU7ReKHs1X+wqj7YXEK3SQKxoPcaK4MhoTpWVwFmOcw4uQLRa4bN111CgaN0PwO7pROuU4zXUE+ntOr1qZaeLK4WTPR+M7GB3UcHMimVb500fjI1i/ruR31lCCCmWo2VldSGPVneXuCO+bplZsemQPprj/O2VZTRsLMc48QlJoVW2y2jcA1YV8V1pTbviOC1B1vIEutpWWarHo5K15mZZmMub29uXlQAcW4P7lRX7vfqA65zQw3KG6MFZ3INPHbCnNc49eNCe1v0S3IMHBmIKuAefXMSe1sixSss0Nna0eZbDPfifLdP4kaONgDtx8Jyoe3TvntzTMo1v6/Oj9zp4D6cc7c8IHO2yXZqmsWyr1UD76Nt7R7N3RNuc6l2raRqdo/0+0e7dFWNQh2wE76uVNR1lu0T77umdrSyEEDIe5HGLLmp/bRryTJDeBOAWZSVFsWrOnM1pUUsXFea1nl3L4nb7C2UZP5bseJC2Yxz9VSbeFpuAcQ+LN8ZdJyyCC0x5I6J1qmWwqxZiuUSrPa4ypvGQFnxeovX0lmk8mndPq0O0nugQrZ9pGcyN2Ga3TMMUJFpP6IhSEazFiNYZrRb21eOUcnV+w3GdqY7wbenrdctriG/u3+VKipJuWRPAiso6GOua9MOS+kQIIaPmawD+7dmHrcS1smysyNosxzW2UxZSNLV0XSuJ90seaR8eynDOKcoy3iwo2zesK/hbJmzsZRGbaiukPopMeSOi8lhjGlMlrLTuWbBoPUOLTpcIdZ0fK1rXapmpN0dE67MtM+PrAdH6WMtMXVqgaP1Ds2WudK205hSte7XM1AtUHce9bpoZgTa6HgLuawT7UkN+DeA2z25/VlmK4WTPVg5hflpCyJiTx1X4QmUpHmd8kpR8i7l5h0Lsw3SB1MEd2j60fVVZ0/GkrHam5R+S93vSWEHSuQ7YTkpSELuFIeIO7RCiCYeqq0Xr/lGRq9vTQir5mPply0z9TYtOJUJj2nGK1hNbBs9ocahWWpFxpfVEh2idY1eDRbQe0myZuQWL1uPcfcklWmc1zdTuui8RUdu+JwH3+LZ9Rn9VOfKaNwNjrCmHenb7rQBepKz5WBbAuzxb8P0xI8XSqNl+MELqxE9l8tKHdeV7uyzeBmCdHG3vqiykrlQ9Qq/1WPhljpSPV0lQqCx8srju145L5fuHlEBkJVivzGpxpoVUzHFgyzTm16Iyt2jdPeOe1jSidW7TTJ2dZ09rjGh9a8s01ooIxkeaZuomEa3nO/qSV7Te1DRTP4uutLrazyha92uaxqzuGJX4boXtTWkrfO0Zkf53X5fKfbTTropeLTkZfTii4D77RnY+zeMHiZSD4Yo8IaWSZzX4PGUpjjwTkafL6hoZD3wCuJWJdc99IYDXy57Vu3KKMp+tV/eOOG/3qPk+gPknePylEYoO3TJ6ISJHyps5qnr+6MF/saHEwy3o8xGMFp0cHTpotxHR9u7cE0ck5l7U5u71HHUcGEwdIXuK0I4m1mnjNKBhZ6Wf7Z+v+6faN9Fn5KlIVOxeW9Yt9u3OtgP3Q58bfe1Dfy8NY3YAcHa4X5EtMsZxX0zY0g+A7ep7rZiWvcHpU4D1+USBqTfsjdxXWdNRlms2IYRUDZt39AcAtvTo10ryW36ZKsmH7csrcrQwyeJg3FhA0uU0K/CAZOQBb2HZ+1uUCLtBWdJxkqxCVyEP9rB5kTxrOnQVyYNDBAfxFq1WLC3eL08+H+lF6x4uu1OQZhetjwO42GCqP1PcF62O8139cPXBvE+CatwTEK2XyxHTt9yi9cp2fjRj1tT9yiVaDwBwTmhupNtEK3iy61x98xNei1HjfnHdnO8pgueT9Bt5ckJ22UG/sKm4LEewGEIIqSM7AfivZ7+/UoIIPltZ0rM/gP8V3B8ST9nCtCF7QceVbwO4P8fYdhbvu/1Vyfizj8R9eWICx56X2M9txB1a7WlV7rQp3YNPinEPThuIyVXngZaZuqaoQEzO8lbjMN89rWocYffgw7O6Bze7R6BO+7zWjPbRbB9TnaNpjwZa7bRVQHO6fZxsbd2jNd09gKatM0+OaYPmdAstOZrzWu2/2/Z5naM13Tma0+blzWmzTbusaaReCy17TlOO7rlytAL/7pxjnNesGFn0+eMyQ+lDUemSTlSWdHBWkRAyadicnJ/zHPOS4jFWFHYv74s923pStrOQ4eFexSFpOayAO2UXYzYFcLsqGW8WFg9Ckp0F4s4IfaALEq1bNM3Ui4uOHiwRigsLxKTG0RGtf2+aqe/77GkdIFp3bLZmrDBAtKJg0XpRc9r8JSxACxGth7avOS9wnr2mHMF+tA+5XmteoK/tf4f7WzFiZ41iOMttHogNZrV+zqGv4/kQ9TsAdyorIYSMPwfkGOGpyjKatvhAPHyypPYhYc6U7QhF8CMArwGwtQTpmhTW43vKi9j3XcQdWk9ymaBOTucefHr4/OAfqfe0Rtt+XCKk5dnTGvLNTXAPthF/35t5T+tg9+DZAD6dyT3Y1d9oJeNyZe79w+73PMc4zokZWqjBmGva5OibG4MrEvsac82ex33LVam2WPee78gXclZOzimEfVehD1IWQgiZDFriUukTE8E+Nx2fIztAF/tMsKiypsP+5lxS4VfqQdlqMw7BfGaKC6p9zZ9VpSQNVoTsWcKdulSOlWTboV0UWB3AigAWk21njQo8bDalPyspoZKNt5Y8nmckfdXUGATtmSFbRS6WffZOlAjOKVrf2HkjFhKIKSisDk4Qrd1rBxvKI1rvAMz1ADYIn6vfdupdmCxa92oH3zJ4WPc1rr+qyCEwE0Xrl8Xl9sW6zVyi9SAYXOEeR7Qv6i65+jkOHOcpgt8skRd9ZpjtSvKGyjqYh8Yw7x6jKhNCsnCaROlf3OOu2dzqxwB4TpWk57gc5+6gLNXiFLpqE+F+iSxdJvfJcW3Fb7rd7/3BHJ8NGyDrde2YP+XwGwDvKKntShISwe18rflE6xn9si65Ravt0LkJojXmXP1YrJ6S40XrcV0RPGClVV8zcqHI0D4KmFMTRGtCm96i9UwR3zHjiPZFd8bRTzsb9SaYjhuKUQPq9yEUay302uiQaxXCp2v2S+kmEbVZOcEz4qHv/prZykKqgmuWkRBSDjsC+J5nyzat0bbKmo7PR5+/MvCrHBF2h4V2KySTyHUAbHDYp/jqt/mnxCN4LkdQ1FeXKIInjrAIbgsnb9H6SqCxbrhOoAl/0Xpk7+x40Ro6SffV2V9Hnd7QrhGXgFcMWGlNaNMpWm0gIjtRMC9BtA4YR7QvujORfp4ubl9L9MdRiGidA4MtVNXoPwaNQ3e/zhwtuYOzspOHCJ4h3gVZsXf8orG66x3Gwe1uPjmqik8EckKqzPf7v/WZ+YjkZ/9XxhNneX53d/mYslSPquW6JcNlrt3+J9lEiOZsuT+vUiWDeWGJ99N3Yq62hN2hp0Xw+onWs5SeKUa0nqSEkhatzgZ1U86uKYO0aVeDvxa9Zk7R+gIYsw2ACxxl6pyCROsz7ZV0u/oXvW+uf6QXrZsDZk2Y/oyUbjN4nsMYGEfF8F2Nu1YeiJZXJYPZQ1bt0+LrDndcexKmuvi+G3z31lWJWZ5CM+s9S/gwJlJlgU6ILzvkCK7zfwA2UdZk8qTFs7E47lLW8pj2bHlBZSGTwD2yDc9OtP+Dr3gil3mK4LSfLZ/f+ckWwTZyb5dYQeMWScsBprc3Uekdf9F6eveBXbepRKvzmjlE69fbe36MUTnbHP0MX1MNqN8H02gHQrowWK07HvWOLU60ntJJ62AWSG4zeJ7DGB4HJLjSR8ITJq7XKvBPNcEyVkyL58JXPAb1mYwi2DctUtX3ac1VlnT4TDxUjaWGdM98H2wXURZC6k/XvfhtHiPZWIJF/lGVuFkh537enZSlXO4XnE0AAB1KSURBVJ6VoD5ZJ+fKXK0i1eF/8txyr0zOjFuskTJ53LPttA/OzyjLYBYe8j0YORERrMWbFphO0fqF6EC0EPISrUc6Lqv6GO6Lfn/Eir3BovWzphHIJ1iMaF3OtFdR8UPVpuq+GdBm8DyHsT+OR0yjvaq9m/wdakidmlK0GoMPi3hTM9OqP4njSOj7aMjToQvlRyE2L1kMS0tAgp+6i0O8yfMh4zxJNF9lfH8YVlOW+rGEZ4+z7rfy9QTwFemEVJ3tcqxcfVOEcBq+muM+2BXk/yhruTwtR9bgYSspCxlH7BPi5QCu56ubmbK3Fz2hLINZQXSh70R57QiL4HlBpZJatNrVgfeXsKf1GzDtZPCqIEG0ZgvENFiYnQ6DOaYjUNQ5uvupRespxpgfKmvcOIoRrccbIyLYgZdo7fxvbwN8Sl8ueDtcjcE9lvrznOR+nOMxEhsg643KqvFdBT5GWaqH70PeajmibFeFYYlgnxliyGq7/S58RJUQUm/+Kak0PuwxitdIIM1BQmA1WTn2Zb8R3OGn5WE6qwheQx7ym6qEJDFXPOyeEoEZ90Sblrh0Ot12jTwxLi8xTbIyv0zc28/A7XxlM1F2EEyfBY8lJdWUWtgaVyIiOLC1LE4TadVyshZJ4b89RescdSWXlnIIs0TxHS9aFzbAMgD+HjnH7m84VInEpHEMFq2ryWreLxNEqz4vVBb3AulbIv/4B0wnl60u7/+dWbQas4u4W9/rnCxBiveB65zRkvfL6QueIni9ztaCdn7FOF7k6bZ3kwSAqToPevZvSh4y6yyC36Qs6cgqan1FsH2ofU8oVgIh48POniIYEudj0JaM85QlPdbj6vkR3GkjE5MvVSXJ2AnJVQD8ObEWidKUbYCjwE7C7ut53Rvl2WQU71Hi5gGndTDvmFgR3JruSqAYsaJFq33w3L3z70L3tF7djbiYIFpVU6GaSq0ljKMjQncHzAGOnLrHwLSjuLX3wxUoWq1wfIt7HMb1Pz3O7KL1aBizdaiqq88pRav8z76HPgBjTnVU6dMKlybdqwqQt3dWiH3dM4rniZ1UWrEcGVcwgAOTiyvD3zxXHiCpGH6mrPVgPknX4kNWt6dHZJbYZ+V5J4pgMqY8204n6Jd6bjn53o4Tujat4BuUNR1WWBw1wlv+qLKkY02K4MzYJ8xlRuD2DvE0sO/TdVTJYBYXT4g0nmykQ9khYX09tt4t0asngtiVYC28nKL16GTR5S1aw+kD3KI1aaW1/8/0onUHmcl6p43yG+jP821BY7CnasVxb1zmYL8ConX99j4iEw6oocdigqfrNkPXHShabwPwo3Y0y8iFVLNpRGvf9nZjXYBdlbrXDr1+akKgahThpnKipwjeQYSGy41sZm9fdzbuk5XgOmADbfzF84FxH3Hpqvq+Zxe75YhwnXX1e67c4/VUyWDeKhEt7/TsKyFV5nCZMMwa0wHy4Bgngr+hLOnZfcT3y/f79AhxMSf14R0y6eGTCWA9+Qz4PKNMImU/+fpOXr1zhBMxQ0dHh84mWmerAuQWrTeh1XXbTBStrv6424z7R/9/dj/P6+TvE3sP4H3Ran8YP9EOTZ4o+jOL1hPaqYZUG2oI6kKq2fSi1bpVbWIcbYaunUK0Bqz9mUPTLzRRKRlsxnoOxO1WGQ/uEheht3iMZu+YKM6+kUEPVpZq4+sSDQlM9m5lrTYvlS0FvqSNTBvkt54iGBIIxSevKiF1YC/ZBpWVhWQ/50mR894LYGXPcf9HvIpGyd89r20ny/YH8FlVQpIY5VPR07Ll5WpVko5PynPPN4fd8Rrikx4pC76f21kyefVOVTKGTAWHZKNDN5umHSDLHq15rfbRjB5zrd0c0Jpn5mufM7d7dMqsmG5Jve7fncO0j5a9xnTA3uz/uzWvtVf772a/fq9Mjt55gX5ZV+7WvG7fw3W642j1zpF606ZbfmxrXq/+Os15rfW6bbSvOc883ppnLmnOc123Fb5P06F2dZ+7422Xm81a88zLW5E2A/ei37a02btu95jbOXr3rBno13Skf512f9Wcbt3YtjdNqE6vb83wed16vdepW6fZq7OoHL3rR/vvuhdBW8Uo6kfoU8qSjrj9xMcpy2Dsyup3K3Z/B5Env+CmkqOwLpGM3yKC1GflqYtPZM48buMvl5QyjABLxhGbV/9hz3EdG32ukok5X3y3SBRJmowFcdhtUrvElJFq8qOck7LntxeVSBI21+82CeVJpPVUvEFZ0mNT3p4zCa9geCV4brwYcay0zun/M+Yf2dyD0Q7cY3Br+LqqI8HTdZuh6+olS0e/Xt12TQ5f6BgTjeLYau/F3L7zBkxcaQ30zVFJr7Qejpb5mLOOOrmAldbOS3xiN0WTaZiBOxNix9LqjWVuL6R6dNXY0bXQOMab28TtdNWMo1yy65YfsK0vLipZOTJHSpxRcVWOCQRIcJtN5IH05/I6VClgx9LykPChAh4Qfz8gkFocv4+xp+WtEmjtGHlo+qPsqSRkHNjOM+epfab6YuD764AcuTdvl+/CUXOtpK57gWc/7Kr6FuLd9PMh7IWsO2VHDU7DbPmO993j+wvZXvi0KiGQiYKyc/I+lCP/uWVXCdZ5mEyEZc1CUQsigbE6300pROu2vS/EYt2DY1PtKHNx7sEnQQu9dwFYHcAdAdF6r/wgbaaEnqt/0X7Gi9Yd2184xjycIFr7pxQjWq+QH9g11FjCQ9Lj0G2hfZ86qYHSiWBX36pFkT9Cdp/qlco6mLMArC2RfBeWv32oY4CDKyWow9KqJD1LBNzwHhbRd7dETHwqkAevzAcOI+3PJxMby8n3ypriOlkEf/Bs454C7vEM2V5hj//KPb4rcI+7ky9VeKgLYl1ML3F9zREiXAO0J+TX9rghdg/vvbL3Ps+K2rbKMhrmirdKHvfILeW4H8CPAdwi38tPi7eSKwZGVeimKrpXUmlNChvKb4SPWJsl3kavVyXZmV/amamfiGuDkXG8DGgH2s2zUv6kssSTRwRDUl99XybBrpHJjX9JH56veD7hhnjl2GeTP6lSIbIn2KQVrZ9F+pVW+WOgaH2gP/OaKFoDfXNU0iutWpj1+7ei2j/YF61Hmwa2jpx3UFsEY+BKa/+UdKL1UBizjyoIC033WMJD0uOIb+vYtt9/DtEaMP+id1bMWPt13W2NMVd5RjteVQJa/VPE07KqxmDO8UyYPmpasq/ofQX1Y1nJz5knR2dV+b5nv5rd9G+qxI+l5CG5LvuIXpew7YAQiOfXHZ534mRlycZ14sFSFX5S0Gf7pRJf5ROqpPrMk+0215Xc06o8JD0nz8e+W2fWLiBQlp0s/o14bJIO92a4D9d6RruPYhc9t5ajjuwh32F3R/se3hOcbk/r5s1m60Wyp7VzFLOnde+Ue1r7e3Xz72k9vjWvNRXqZ39P6wda81orRfa03t6abt3g2tPaPua2+tfpXmNupI6+n/bvvVvTrRfEteU6P/GY19TlLdXWt1rTzftUvcg9d7Ylh+m117y0Nd3sXad9NMOHadubyt5qVnJPcNH4pjVaWlYNfQQwJEhLXfm/Gvd9WNgJkstyXGuS73HdgqeR4XNnjgBBedm5Yq/3F5kDtu3Rs6eyFk+VPGdu8IxF0uWTOQJ6oh04lgI4iJFJgbRcX8DWp3HgqLj3YdgdOpoiybUCaHAGskcPDpQ53YOfbLunpd/T2q/m7x68NFqdWY2EsRzZvXEB6yHtlc/BK62u9sJ96v3R/msfcSuMmCNnxYw17UqrCS/vH9aL4uc4zSCaxNlxCWNspNhfO18r3bk05ipQdM++AOBzQ/5xu6Kmq8BdLpeH0LIjKNaZvK7u98iqxoaqZPzh/mWShh09UpDl5TzxAqoSz8g+xkkPcjWM742qPRnZ58S3e2a6gEy23iYu8FmZVdwwxoJfeATtO5XRuuNdyHWKpChh0bq+RAbt2fr/ziVa9wvVQYxwcglNf/dgm090/gGi9WPiMvfvgPUmGPNb114H3WXnWCN1e/+YI/uHntH1VMMxplSitfO/zmt1geSl3SSmcwnm9h9PtDfPx4wx1q3d3eA405KgIPsPcYzavb5+HNgN4EYUdq/WCcqanV0lwNWkUeU9iKQ62AfOM8Wdblh8uqKv/8GyKDBTlUwOw9gDWbUYCpaN5DdnEVWSjl+KK/wDGc+bqyyTjU/E5wtk8W6SV9Sn4wLEhleCmy0l2iKi9QzVQn7Rag1f1VYlWnVb7vb6fYprq7NBfTttdorWfe3DeES02qX1H6ia+UTrTBHdZyaIVjd6IMFTdQfCY9yqv+cis2jdvJ3TNbiqH6yjqgcK0lQbHWX8CB01RBH8+zERNleICN5ClZDd1CfZj3vES2Hfib+jhLjZd4gi+PgKe/A8KtGuT1clZNz5n+wJv9lznDNFwK2iSkgWfLcw2e0Vv1JWEhHBkiIpRrS+Mrj6qYSLv2g9UrWnxVaM2SlaI3XVSZBV18WQTrQeIHsiHg+I1stDqW+KE63HiItjM0G0hjoZ01TidSKi9TnZd/odmHZSfwdKtP5VVpB/1TXED9ZdnvzyjCU2Wu7XZaKjbD45RjdwWwlm8EJVMrlYt8RLCxz9fuINsroqIYTMk5WUIjwvBvGZAeWj5gzZT79JtbtJSuDXAI4A2l6UPrxCcmZXJep53bhQJq19uFm0zKmTfhOjqBRJCaL1zKC5QNF6MgaL1kibjjpOU6x78O7RTg4QrXtKNOUgxxrT3rujO6DH2O9R3DU611lCcpxeEDmt2JVWfQ+nJRLvh9uBH4x1e3eK1jth8C35Eoy5ue5JgVgmxyUasppQtgj+mfxYjQtPSb7CPxSYVqjO2EA9Hy2h/3ary5852UCIkxMl0KBvrtw07BrnslcxNm9vCwPW5Vtl4rALNe+Qw4ePiOfh5yb9RmbkfwVscbNZfVYYk61yhRHeE9yMqreeaF0uGh6/INF6mry4YorRVQ5RNUC0KlPAbFc9lskoWg+XvgaDIpwPY46XN5Xqbw7ReqJxiOCEk53l7pcnpo2++WIYczGAlSS32KvlPfJvEVe3xN3bflsx5e4OTRrPihA+s8Rxf0BZ6s/dktLGhrhfcYLfPxeVOIv+uOQE/LF4hhBCwtitQz9V1mKweSzPrcn9bkqQpMu5IjyRbCyu8Yt6Dt4+S/9R0veQdGwt+e3zsq/k5i4ibdJYEBLBNuVNjGj9vDYVIlqPCtZRzcQJuHzuwXrv22DROr9ERTyjf0L7H3Z2+Ivqku57mFge0IgrSFL5H8S24bi/sfiV3wfTjU7pLFedjsXdfvr+j4YyO3UWgPeXlE91e0kMPo7cLSLt7Al1p9pD3jtlYn9k15JZes4WExLm+hKDZG2qLNWmmzP30JwpdEj9mJZo0bfm6PnVsoA07MjrdWSvggOEHi6vnfVk9Q10NjaE8gS33aGnmzDT/fytrenWwi2bMzeU17XZPozkiu0evRyy7XrNztGSnLLzWp36/eMCM918MjEPbfsazV6fekczmI+22T8i/ekf0kaz9THTbK2g8tQ2A9cKnteSo9PGZ0yzObPdVv/6Z7aarUdD17FHq9k/txXpy7TUifQRvaNpj+M7/2/pY7rZrdM5Wq3OET5fl8fVCZa3AmWt7hFT7qoTvfZ0033N0CHl5TDl2arveWl5t+wpL5LTlBt98fgEDCvyXlrX6O3Epcon3UIdOU+EadkCOMi+MhE3zjP1ZX/Gs1DV76k8+AYXrPKYIHlif6as+dhecn7XkeNlu8p3a9r/rGR5X/t8BhoVjQ4d5XeyT94XuwB3TYrPe9W/D8rESDT2L5ZwjcskztNpqmQ8acS9lyLRoSVrRFiTnNL/ZyGBmLrWg+PX2zLvaR1YLn8dmNE9ONhfuxfoQ0poGHNGb0XbRcI90RfrYd2Q3wTTDisfVyfaPzdJ5dGyTPcmprxbFqtrk65ZOL7uOgsqS7HMkyBz3ytoRfhwx571MljCo80yZhovlsO6fr8HwDZjtl/4bnF9/mHGxPhFcrkcm8keQBsvYMkR9aUMFqtQX3xTziysLNXB97u3Sq9LHBsA+DaAD8aUZ2EX9UxRP26U4x3yfWEnKZev+ZjiyLIn3Gf/+ALqCby6nCgrwr5eDGtIsNCkGBdlP4tVla+J9rqzxP7ZbY77i3fdVvIbv5aqNR4sEfcsGppxWuIwWXHvi9YpGGPzdM3o2t1kFq1XyZdlXHmM1lIta3O86LMrG99PKE8+v2P+B2Beqso6+dOWiul0uvZ1+Y0yw+oqc1wmpt1SReuANmOLdZtPnLOjqpWXRqPxDhFLy2ZsyubC/puylsNuEhDF58vnOwC+BOA6VVIOczzE9unOLQjFsqw8gL1cJhfWln3tdeB5+aGzwczukL1S11ew34vIXrBVZM/w62ue7mIY78u0LCsPJDMynneMRGutIpuIy2NWdpIH4zpgV3A/7hkk6HzZXvVbVVJ/pgLR5u0WlnVk1Wkc8gvPDi8MJfJdERdZeEgmEOqUx/wfztg46bDb7lZOqLlKCV5zVcV6mFwpK+R5XM3zsJ48P60u/35VnHisGfaz+A1XatuQCF78ECnvi9Jj5cE3TH7Ruqqsdmhhp+oWFojplmCKp5g6Gt3+lrJCErz+0bIal9y37KJ1TYmKqyuNWLQG/vFmoJ1aaU0JoGYnBG6DMZeJkA9Hu9T3s80T535c2fLSaLTf3mtKOqeFIjOs3Y50d6tPyV6XX8gs/zCZX1bbXimrbQsH+hhKWCZBDR6SL8mfD7mfDfk+eHF06ilQbgIuXf+RB73HVEvlspSkL1tVZuMXlXtqZ9nnC/TP9WaM2huO8QXLXON3lTfls/C8vIZPtnNsA3fJUaeHHsiK3SvlIWUp+XthmbmfKZ+n4Pjj7jci7xvX/zHg/Gg7cLw2CLhEPSpZCZ5ULYyOjWVieP6E90J3TFPy2Tp9BJ+tLOws379Tge/e6GscHNe9EsG0bljB91oASwOYJX2Pvu/s8Zx85m8ewXf3KFko8H28rHxXzJLvivkc3xXB+zbob8R8Z7i+mxGxIaE+InXscb+kmIn7fEZZTvZzLh7z7IHIZ/p5eVi/UbVUbVaVz/qiMk7Xd3b0tWrI89a35ZkriW3kOXO+jKvkcb8ZrtfcVTfuPRNHXBuu17sp3wdPyjPz7yua1cP+vq8mEzOLiSBeUH6nZqS8R677ksWe9NlMovt7/5i4fTvj5YRE8GKzL4uWP9v+Aku30pq2/Jfyho7Y1T80/iutb++trrjL3ee6BeQd4q4cNM8EzGPxMybeovUKAFuoU7oVY4cS12bsCXrsg+zWFdWYY2SmKO76/5IJgi8P6sMTX91F2QghhBBCCCEkD7IwFiLsnhIOULR/RwC7RUsO0RqOrBjXfpry9Cut52hzQrvJonV12cd5baAZO6P1VcDsraoH24y9ZNw4zOYyy6bdQeLuS5w9scxhT75PXwHMzs764WssL/d+S8C8T+6To1nnNQghhBBCCCGkcMIrwftcEhQljzoD4cQKqRTlxtwlS+uByzj/cJhjyrtl8aL1deJq4GhmQJuxxeY2AG/s5Q3u1FsMMP8RNwFN3H2Js/fLvinuvMn9HnifYoR27PVj6rf32JoPqeqJ57T/cbPcs0B5v/4T5+2pWiOEEEIIIYSQPAxeCW71tjps2xbAxQdi2rtXFi9aE/50ttkvcxd/XhUk91GKYso69tfIPo9nAyVPwpjvSoQ13bdYk6MsbN9eolo/mNiv2DGqP+Ltg/pkzJ4SITtyTkz9sH092R+6d/wYCCGEEEIIIaRcwivBe/Qi9dsAAC8JiZn8ovVBCajTL4vVQnFtxp4QJw5XhjHxUX7d57ivE+7DFwB82lHhpRLtrpFjpVWX9SKZxp2j6sdfO71ojbbzItnjO5WqvrOobVwrtDIvFZ+4cH9VmxBCCCGEEELykGJPcHsl+F1hARwQK05hAy2G3OIsLBpdAi3JnljmsHdMpzvLXOdkE60nxojW+8Ppn2KuEdcn17U7onUfCcv/b0ehxtXOoPrOIvX6TamKWd2wgZ90XO3NrTC4ZIKS7BNCCCGEEEIqgMsdei9nt+KEVZw9XPYUgEsCBapqCXtaZ4qgd5wee07MnyH713pi1HVtY/PImc2UXbcTMMfYw/XXBfC9Xn3nKS5jbtHatW/oLMq00t3+z9KyWv5hOf4EmO3cqaAIIYQQQgghpFhcK8FJKW8cJkeZth9QsHuw2x7u08skP12g3NFOdvfg45zt9Ov/SfKerR+6rvMUlzF2TH0R7K6g7a6i5L5H/uzZFhQR7q7rsrcctg5zAbwBMDa34tWSbuqdFMGEEEIIIYSQYRAWwaYtghfo/LtrUyKmW5DwpzrnXKe93D2t/f3HrnZ0/fB1nUXmSgD3JLbR+fNQwPxMne6qH7S7ivp9X1nVV3+6Gkhpjxet6KRpMtqZPlo/3cTI/PLaLCPG38OYi1RVQgghhBBCCCmB6EpwIzHwkZ9oPcJdkLGdQfV10UyXUdmyrWjPCdldp3T6fgOA2wGsEdOOj2idmUG0prOnG/tB7T3QIXPmNoK0AGMDYy0L4EIAu0SibBNCCCGEEEJIaUT3BBsYPOcQLnGCRswx9k79k7Q5RkA6jS7x6LDrCvcpu+uU5L4H/7xRxJsDZxt2NfgHvb/yi9a/eO/n9ROtdu/utwBsCBgrVjcAsFy4mqONwffTTrI8J7mPvxlfnxBCCCGEEEKKJyKCp9EWW8ArwvolRkA6jSHb6TDtPaAxdQfYXafEiiYlWu8HzHNqX7CrrsuuRevBsXXd9sth8LfO3uRCRGsGAe6wZROtC4s79+oAzgRg8wNf3xbBzvouW1zb5hkAKw06lRBCCCGEEELKQEeHNvhcJ8VPnDpJsOuiI9xCyNFOnEhz1XXZtWidJ+l4tlR149qIXyX9YyfYlbJL9dg2jmivdsZdL8mm78fP1LX0CRpnfZctVHdREcDW+EZZFT4HwNtgurmlY9pw2kO2S9X1XKcQQgghhBBCSAk4RLC5BsBDAF6YIGRcIi1a+HVJjeRuQ4tWVxsOYgWnAzO7L4KDTWd2D57tsDlMyn4BjDldRKTrBI1btH4RwMPa7Kwb86erbpzd2Nd/645LN14P4D8AHoGR4FjqFGWIsbXtn1MmQgghhBBCCBkSLndoy/adVdRconUfZR/unlbLXZ2VWLO9u5qjDS0sfwXgR8667vrRdj/ZW/30E602ZPchjgquk9x9U8XK4LJd2jnaqZk2klRGiwHYIn4scfae7bx2NGhtJ4QQQgghhJChoFeCO8Lkmk4+3G405DixEmM3ZmMAT4SrxNR12h02/0BMNgDTa+WIqe+ytevaFdB3J9YdPL7vAjgFwIGOk6LXcxVvBJinVd24NuLsznHH2UO2X8vRtdtcxe9V9VUzyvA7ADu6r0cIIYQQQgghw0GvBPdF3WESyfeQcE9cIqZna4kb7U9yiNYU9V22xLrriHjbLIMovxPApgAej63rFq0uw2xJwnxwtMBRt9v20yLgr3deM00bSXZVpAxx13sfgG8A5qOqbrCd8Gk/Box2S3e3TwghhBBCCCGloUVwmENhzG9kFfNNEfUSrfuDttgz5i7dWVVXzC57IXtaowYbJGtzGGMF/W4weGlC/ec6QaDMfq6GnCbEjSVkt9f+TSfXsFlb1Qu3fRmA/QHc27Or5pUhuR9x9d2i1WUItr8jgJ8D+DSA1yTU/ytgviwr4YFqzrqEEEIIIYQQUjqN4AUWe89BQaUS5QMw5l0AVgSwhJz7AGDubQeAAm4Jn+psI8busuXe0xpnn68jhM0bJO+t3edq0zj9G8CtMMYG9HpwQBuD7eqUkOF9bVEOLA9jlpHrPwLgbgAXAfito4FwO6pYGcQcY4+r75yEiKvbLrNj2UQCqdmo0s92AquZG3Rk7Pj+PHHd+cpGCCGEEEIIIXloNBq8f4QQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGjA8D/A4/QF5ev2fueAAAAAElFTkSuQmCC" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);