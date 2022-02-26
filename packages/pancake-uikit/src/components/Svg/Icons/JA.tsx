import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 72 72" {...props}>
      <image width="100%" height="100%"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAd1QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1AlC1QpD1Q1F1Q5G1hBI1xZM1xpP2B1R2B9T2CBU2iZZ2idZ2yxd2y1e2zFh3DZl3Thm3T1q3j5r3kBs3kFt30dy4Elz4Et14Ex24U944ll/412D416E5F+E5WiL5WmM5WqN6HiY6Hua6X2b6X6c7JKr7ZSt7Ziw75+176S58Km98Kq+8a3A9L/O9cHP9cPR9sfU9sjV9snV9svX983Z987a+dvj+dzk+d3l+t7m+uHo++Tr/Orv/e/z/fD0/fT3/vr7//v8//39//7+////cbaW9AAAAFp0Uk5TAAECBggKDhcbJSssMzg5P0pPV1laXV5fYWNkZ2hpamtsbW5vcHFzdHV2eX+Cg4aHiYuMjpCRl5mbo6WnqausrbTFxsfK2drc3t/l5+js7vHy9PX2+Pn7/P3+yCCZogAABZJJREFUeNrlm01sG0UUx3+21/vhdex81TFJmwCiVasi0ZYDB85AKQhBAXFCCHGEEweOqOLIgVM5IoQ4oUJbIQoFzkggIVoQbWlBoV9pPurEjuP12utdh4Ptuo1n7STeKrNhTtHM8/wzf/1n9s2b9yJssMVRUIihEEdBBRxcarh4uLjUNjhflC1ukfWbauhopHtYLVOlQnWbMRDDwCQFQJ0aOgYDaCgkgDIuVVawqRBvrqiIhY23LRhQSDCIBnjE2EGW57tYf8Mct/GIAVUKlHFDzUAEgxF0wGGMKZ5d56TfcY15VMBmCZvVkDKgkmQEcNjJW5uY+hNuogKLlHBCyIDOKAYuw7zdx/Qfs4SCTY5KyBgwyRLFYT+v9AnwJRdQqTOHFRoGogyQAaIc5OkAIH7gHHVggRXqIWAgSppRVknxToAwxykSIcdyBwfyMZAmg8skbwQM9BnXUVhgWXIGTMZZZSLw9Tc4mCHCrTXngVwM6EwQZaCn/h1ylKlSpoLX9JYNUgz3cLCOs0KdmXu+CzIxoJLBIMZ7Xcw9ZsmT8/F3dcbYwWCX33+Ih83CXf7BljOgtKlIYlDj8S7Gc1yl1GW8wjWuM84kpo/FAX7GIEn+jp8ojwYSTOCyn6M+hiWusLTOSWNM8aDP2k5yAYUZypJpQGEEGPVd/zyXu3i2nXtlmjJ7UAVjR5mnwDBO884kiwZSjFHjfR+jG/wt8GV6tQH2NW/Ua9sHxJmnKJEGYgwCkz4mM1ze1NQr/MkhdMHIJLMMYuFJo4EkD/gqYIk/et7x/dsoj7YP2zUqmKUkjQZMICsctrnUx/ohxzR7BP1ZFjGlYUAjheezB65h9wlwnUEygn2wQIoCVSkY0AGFw4LBZWYCgLghYOAw51lFl4QBDQT/Y0MBqwFA5JkT7LEM82hS7II4aerCUyDPQkAgNwXzZ5klTV4CBhTA5YhgqBAYSIEyiTV9R/iVKIokDBjCodsBwuQEJ62OJwUDMRB6LcWmzxZMywsZsIhJogGR72oFCiPaUSksKTQQB+ENxgkUpkaN+Jo+Fe68sm21BuKCATdgILsDRQEpNKBCxzl9PxjofE02AVWSe4G7JdCSxAcUB13o+ysBA3V+b8qAIwEDro8G7j8DHuBKwEANhBpQA4WJC05bG6hJogFR/NcMFEYUQS9JogHPRwMpUgF6hUPC72METxINiN/2MwEyMCroq2BIoQEX0DjFSx1D6QD3QKfHcQpNmpNwmbQwEjBEJqAIwU5B3wJRlqU4CRve2pxwcIrbAUSJhoTxlzlUqsgRKa0AUU7zomAfTHCzb4hdgr7TRGkhy6CBIimu+qhgsc9o8aQwBnkVhaI0GgCLFIucFcSLDfb1+WLysKD3LIskmhEIORiwqZJgWmgwzG4ubXLyBHuF3vU0CapNbcnBgEeBMWY5w3MCkwnqm345FcXfzjBLgkIzC0OW1/MyNgkuChmAXagbej0HyLIbTThykQS2PPkD92RQ1HiI130Mg8qg+Jx/icuUQRFp/zHECBaHfLMoemfRNObplkVzkt8wWZQyi6aVSVXiSeH7SetO308m1bf8RFK2TCpBNl2VYz1+5JDDwmlm06kYaBgMMNIjm+4YmtTZdI2owDir6Lx7H6A+oiJ9RmXDE87gYvAYTwUI8yO/Y4ciq7adWW3xBC8EBPI1v2CGJrO6nV1f5ACvBQDxBedJEZ7s+tZ5kCVKiUd4s0+AT/mHZMgqLFrfhVEMalQ4yKubnPwE59CJh7LKpuEfNCqtLDT2bpiFE/xFFZPwVlo1Bg2GMWi8pe9hjGfWMeX3zHOFRrw93NV2ratTq+LSZYUk4wzxso/tV+S5RYkBFLZHxWX7pnN31a1FjSgmJmqz8trBwqJOHHMbVt222/+58vrutu2q7/8DQHin/dpMhjMAAAAASUVORK5CYII=" />

    </Svg>
  );
};

export default Icon;
