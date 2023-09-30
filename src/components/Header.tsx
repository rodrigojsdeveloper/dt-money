import { Button } from "./Button";

const Header = () => {
  return (
    <header className="w-full max-w-1440 h-212 flex flex-row justify-center bg-grey-1">
      <div className="w-full max-w-1119 h-50 flex flex-row justify-between mt-10 px-6 max-sm:h-38 max-sm:items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="173"
          height="42"
          viewBox="0 0 173 42"
          fill="none"
          className="max-sm:hidden"
        >
          <path
            opacity="0.5"
            d="M40.0652 2.25671L30.2601 36.9917C30.2102 37.1494 30.0108 37.1967 29.8945 37.0863L23.3301 30.8583L28.2492 13.4514C28.2991 13.2937 28.1495 13.1518 27.9833 13.1991L9.63617 17.8662L3.10498 11.6697C2.98865 11.5593 3.03851 11.3701 3.20469 11.3228L39.7993 2.00444C39.9655 1.97291 40.115 2.11481 40.0652 2.25671Z"
            fill="#00B37E"
          />
          <path
            opacity="0.5"
            d="M23.3297 30.858L20.8037 39.8452C20.7538 40.0029 20.5544 40.0502 20.4381 39.9398L0.0634003 20.6251C-0.0529313 20.5147 -0.00307518 20.3255 0.163113 20.2782L9.63583 17.8658L23.3297 30.858Z"
            fill="#00B37E"
          />
          <path
            d="M28.2484 13.4511L23.3292 30.858L9.63533 17.8659L27.9825 13.1988C28.1487 13.1515 28.2982 13.2934 28.2484 13.4511Z"
            fill="#00B37E"
          />
          <path
            d="M63.2741 29.5H59.3139L59.3389 26.5767H63.2741C64.2569 26.5767 65.0856 26.356 65.7602 25.9146C66.4348 25.4648 66.9428 24.811 67.2843 23.9532C67.6341 23.0953 67.809 22.0584 67.809 20.8425V19.9555C67.809 19.0227 67.7091 18.2023 67.5092 17.4944C67.3176 16.7865 67.0303 16.191 66.6472 15.7079C66.2641 15.2249 65.7935 14.8626 65.2355 14.621C64.6775 14.3712 64.0362 14.2462 63.3116 14.2462H59.2389V11.3104H63.3116C64.5276 11.3104 65.6394 11.5186 66.6472 11.9351C67.6633 12.3432 68.5419 12.9303 69.2832 13.6966C70.0244 14.4628 70.5949 15.3789 70.9947 16.445C71.4028 17.5027 71.6068 18.6812 71.6068 19.9805V20.8425C71.6068 22.1334 71.4028 23.3119 70.9947 24.3779C70.5949 25.444 70.0244 26.3601 69.2832 27.1264C68.5503 27.8843 67.6716 28.4714 66.6472 28.8879C65.6311 29.296 64.5067 29.5 63.2741 29.5ZM61.4377 11.3104V29.5H57.6898V11.3104H61.4377ZM81.6136 11.3104V29.5H77.8782V11.3104H81.6136ZM87.2104 11.3104V14.2462H72.3689V11.3104H87.2104ZM96.7549 11.3104H99.9281L104.6 24.6653L109.273 11.3104H112.446L105.875 29.5H103.326L96.7549 11.3104ZM95.0434 11.3104H98.2041L98.7788 24.328V29.5H95.0434V11.3104ZM110.997 11.3104H114.17V29.5H110.422V24.328L110.997 11.3104ZM116.656 22.8788V22.6164C116.656 21.6253 116.798 20.7134 117.081 19.8805C117.364 19.0393 117.776 18.3106 118.318 17.6943C118.859 17.078 119.525 16.5991 120.316 16.2576C121.108 15.9078 122.015 15.7329 123.04 15.7329C124.064 15.7329 124.976 15.9078 125.776 16.2576C126.575 16.5991 127.246 17.078 127.787 17.6943C128.337 18.3106 128.753 19.0393 129.036 19.8805C129.32 20.7134 129.461 21.6253 129.461 22.6164V22.8788C129.461 23.8616 129.32 24.7735 129.036 25.6147C128.753 26.4476 128.337 27.1763 127.787 27.801C127.246 28.4173 126.579 28.8962 125.788 29.2377C124.997 29.5791 124.089 29.7499 123.065 29.7499C122.04 29.7499 121.128 29.5791 120.329 29.2377C119.538 28.8962 118.867 28.4173 118.318 27.801C117.776 27.1763 117.364 26.4476 117.081 25.6147C116.798 24.7735 116.656 23.8616 116.656 22.8788ZM120.254 22.6164V22.8788C120.254 23.4451 120.304 23.974 120.404 24.4654C120.504 24.9568 120.662 25.3899 120.879 25.7646C121.103 26.1311 121.395 26.4184 121.753 26.6266C122.111 26.8349 122.548 26.939 123.065 26.939C123.565 26.939 123.993 26.8349 124.352 26.6266C124.71 26.4184 124.997 26.1311 125.214 25.7646C125.43 25.3899 125.588 24.9568 125.688 24.4654C125.797 23.974 125.851 23.4451 125.851 22.8788V22.6164C125.851 22.0668 125.797 21.5504 125.688 21.0673C125.588 20.576 125.426 20.1429 125.201 19.7681C124.985 19.385 124.697 19.0851 124.339 18.8686C123.981 18.6521 123.548 18.5438 123.04 18.5438C122.532 18.5438 122.099 18.6521 121.741 18.8686C121.391 19.0851 121.103 19.385 120.879 19.7681C120.662 20.1429 120.504 20.576 120.404 21.0673C120.304 21.5504 120.254 22.0668 120.254 22.6164ZM135.195 18.8686V29.5H131.597V15.9828H134.97L135.195 18.8686ZM134.671 22.2666H133.696C133.696 21.2672 133.825 20.3677 134.084 19.5682C134.342 18.7603 134.704 18.0732 135.17 17.5069C135.637 16.9322 136.191 16.495 136.832 16.1951C137.482 15.887 138.206 15.7329 139.006 15.7329C139.639 15.7329 140.217 15.8245 140.742 16.0077C141.267 16.191 141.717 16.4825 142.091 16.8822C142.475 17.282 142.766 17.8109 142.966 18.4688C143.174 19.1268 143.278 19.9305 143.278 20.8799V29.5H139.655V20.8675C139.655 20.2678 139.572 19.8014 139.405 19.4683C139.239 19.1351 138.993 18.9019 138.668 18.7687C138.352 18.6271 137.96 18.5563 137.494 18.5563C137.011 18.5563 136.59 18.6521 136.232 18.8436C135.882 19.0352 135.591 19.3017 135.358 19.6432C135.133 19.9763 134.962 20.3677 134.846 20.8175C134.729 21.2672 134.671 21.7503 134.671 22.2666ZM152.236 29.7499C151.186 29.7499 150.245 29.5833 149.412 29.2501C148.579 28.9087 147.871 28.4381 147.288 27.8385C146.714 27.2388 146.272 26.5434 145.964 25.7521C145.656 24.9526 145.502 24.1031 145.502 23.2036V22.7039C145.502 21.6795 145.648 20.7425 145.939 19.893C146.231 19.0435 146.647 18.3064 147.188 17.6818C147.738 17.0571 148.404 16.5782 149.187 16.2451C149.97 15.9036 150.853 15.7329 151.836 15.7329C152.794 15.7329 153.643 15.8911 154.384 16.2076C155.126 16.5241 155.746 16.9739 156.246 17.5569C156.754 18.1398 157.137 18.8394 157.395 19.6556C157.653 20.4635 157.782 21.363 157.782 22.3541V23.8532H147.039V21.4546H154.247V21.1798C154.247 20.6801 154.155 20.2345 153.972 19.843C153.797 19.4433 153.531 19.1268 153.173 18.8936C152.814 18.6604 152.356 18.5438 151.798 18.5438C151.324 18.5438 150.916 18.6479 150.574 18.8561C150.233 19.0643 149.954 19.3558 149.737 19.7306C149.529 20.1054 149.371 20.5468 149.262 21.0548C149.162 21.5546 149.112 22.1042 149.112 22.7039V23.2036C149.112 23.745 149.187 24.2447 149.337 24.7028C149.495 25.1608 149.716 25.5564 149.999 25.8896C150.291 26.2227 150.641 26.4809 151.049 26.6641C151.465 26.8474 151.936 26.939 152.46 26.939C153.11 26.939 153.714 26.814 154.272 26.5642C154.838 26.306 155.325 25.9187 155.734 25.4024L157.483 27.3013C157.199 27.7094 156.812 28.1008 156.321 28.4756C155.838 28.8504 155.255 29.1585 154.572 29.4001C153.889 29.6333 153.11 29.7499 152.236 29.7499ZM163.667 27.9759L167.252 15.9828H171.112L165.678 31.5363C165.561 31.8778 165.403 32.2443 165.203 32.6357C165.012 33.0271 164.749 33.3978 164.416 33.7476C164.091 34.1057 163.679 34.3972 163.179 34.6221C162.688 34.8469 162.084 34.9594 161.368 34.9594C161.026 34.9594 160.747 34.9385 160.531 34.8969C160.314 34.8553 160.056 34.797 159.756 34.722V32.086C159.848 32.086 159.944 32.086 160.044 32.086C160.144 32.0943 160.239 32.0985 160.331 32.0985C160.806 32.0985 161.193 32.0444 161.493 31.9361C161.793 31.8278 162.034 31.6613 162.217 31.4364C162.401 31.2198 162.546 30.9367 162.655 30.5869L163.667 27.9759ZM162.167 15.9828L165.103 25.7771L165.615 29.5874L163.167 29.8498L158.307 15.9828H162.167Z"
            fill="#E1E1E6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117"
          height="26"
          viewBox="0 0 117 26"
          fill="none"
          className="sm:hidden"
        >
          <path
            opacity="0.5"
            d="M26.9942 1.65629L21.1221 22.8034C21.0923 22.8994 20.9728 22.9282 20.9032 22.861L16.9719 19.0693L19.9178 8.47174C19.9477 8.37575 19.8581 8.28936 19.7586 8.31816L8.77089 11.1595L4.8595 7.38703C4.78984 7.31984 4.81969 7.20465 4.91922 7.17585L26.8349 1.5027C26.9345 1.4835 27.024 1.5699 26.9942 1.65629Z"
            fill="#00B37E"
          />
          <path
            opacity="0.5"
            d="M16.9717 19.0691L15.4589 24.5407C15.429 24.6367 15.3096 24.6654 15.2399 24.5983L3.03797 12.8392C2.9683 12.772 2.99816 12.6568 3.09768 12.628L8.77069 11.1593L16.9717 19.0691Z"
            fill="#00B37E"
          />
          <path
            d="M19.9173 8.47153L16.9714 19.0691L8.77039 11.1593L19.7581 8.31794C19.8576 8.28914 19.9472 8.37553 19.9173 8.47153Z"
            fill="#00B37E"
          />
          <path
            d="M39.7781 19.3064H37.0988L37.1157 17.3286H39.7781C40.443 17.3286 41.0037 17.1793 41.4601 16.8806C41.9165 16.5763 42.2603 16.134 42.4913 15.5536C42.7279 14.9732 42.8463 14.2717 42.8463 13.449V12.8489C42.8463 12.2178 42.7787 11.6628 42.6434 11.1838C42.5138 10.7049 42.3194 10.302 42.0602 9.97517C41.801 9.64835 41.4827 9.40324 41.1051 9.23983C40.7276 9.07079 40.2937 8.98627 39.8035 8.98627H37.0481V7H39.8035C40.6262 7 41.3784 7.14087 42.0602 7.42261C42.7477 7.69871 43.3421 8.09597 43.8436 8.61437C44.3451 9.13277 44.7311 9.7526 45.0016 10.4739C45.2777 11.1895 45.4157 11.9868 45.4157 12.8658V13.449C45.4157 14.3224 45.2777 15.1197 45.0016 15.841C44.7311 16.5622 44.3451 17.1821 43.8436 17.7005C43.3478 18.2132 42.7533 18.6105 42.0602 18.8922C41.3728 19.1683 40.6121 19.3064 39.7781 19.3064ZM38.5357 7V19.3064H36V7H38.5357Z"
            fill="#E1E1E6"
          />
          <path
            d="M52.1859 7V19.3064H49.6587V7H52.1859ZM55.9725 7V8.98627H45.9313V7H55.9725Z"
            fill="#E1E1E6"
          />
          <path
            d="M62.43 7H64.5769L67.738 16.0354L70.8991 7H73.046L68.6001 19.3064H66.8759L62.43 7ZM61.2721 7H63.4105L63.7993 15.8072V19.3064H61.2721V7ZM72.0655 7H74.2124V19.3064H71.6767V15.8072L72.0655 7Z"
            fill="#E1E1E6"
          />
          <path
            d="M75.8943 14.8267V14.6492C75.8943 13.9787 75.9901 13.3617 76.1817 12.7982C76.3733 12.2291 76.6522 11.736 77.0185 11.3191C77.3848 10.9021 77.8355 10.5781 78.3708 10.3471C78.9061 10.1104 79.5203 9.99208 80.2134 9.99208C80.9065 9.99208 81.5235 10.1104 82.0644 10.3471C82.6054 10.5781 83.059 10.9021 83.4253 11.3191C83.7971 11.736 84.0789 12.2291 84.2705 12.7982C84.4621 13.3617 84.5578 13.9787 84.5578 14.6492V14.8267C84.5578 15.4916 84.4621 16.1086 84.2705 16.6778C84.0789 17.2412 83.7971 17.7343 83.4253 18.1569C83.059 18.5739 82.6082 18.8979 82.0729 19.1289C81.5376 19.3599 80.9234 19.4754 80.2303 19.4754C79.5372 19.4754 78.9202 19.3599 78.3793 19.1289C77.844 18.8979 77.3904 18.5739 77.0185 18.1569C76.6522 17.7343 76.3733 17.2412 76.1817 16.6778C75.9901 16.1086 75.8943 15.4916 75.8943 14.8267ZM78.3286 14.6492V14.8267C78.3286 15.2099 78.3624 15.5677 78.43 15.9002C78.4976 16.2326 78.6047 16.5256 78.7512 16.7792C78.9033 17.0271 79.1005 17.2215 79.3428 17.3624C79.5851 17.5033 79.881 17.5737 80.2303 17.5737C80.5684 17.5737 80.8586 17.5033 81.1009 17.3624C81.3432 17.2215 81.5376 17.0271 81.6841 16.7792C81.8306 16.5256 81.9377 16.2326 82.0053 15.9002C82.0785 15.5677 82.1152 15.2099 82.1152 14.8267V14.6492C82.1152 14.2773 82.0785 13.928 82.0053 13.6012C81.9377 13.2687 81.8278 12.9757 81.6756 12.7221C81.5291 12.4629 81.3347 12.2601 81.0924 12.1136C80.8501 11.9671 80.5571 11.8938 80.2134 11.8938C79.8697 11.8938 79.5767 11.9671 79.3344 12.1136C79.0977 12.2601 78.9033 12.4629 78.7512 12.7221C78.6047 12.9757 78.4976 13.2687 78.43 13.6012C78.3624 13.928 78.3286 14.2773 78.3286 14.6492Z"
            fill="#E1E1E6"
          />
          <path
            d="M88.4374 12.1136V19.3064H86.0032V10.1611H88.2853L88.4374 12.1136ZM88.0824 14.4126H87.4231C87.4231 13.7364 87.5105 13.1278 87.6852 12.5869C87.8598 12.0403 88.1049 11.5755 88.4205 11.1923C88.736 10.8035 89.1108 10.5077 89.5446 10.3048C89.9841 10.0963 90.4744 9.99208 91.0153 9.99208C91.4436 9.99208 91.8352 10.0541 92.1902 10.178C92.5452 10.302 92.8494 10.4992 93.103 10.7697C93.3622 11.0401 93.5594 11.398 93.6947 11.8431C93.8355 12.2883 93.906 12.832 93.906 13.4744V19.3064H91.4548V13.4659C91.4548 13.0602 91.3985 12.7447 91.2858 12.5193C91.1731 12.2939 91.0069 12.1361 90.7871 12.046C90.573 11.9502 90.3081 11.9023 89.9926 11.9023C89.6658 11.9023 89.3812 11.9671 89.1389 12.0967C88.9023 12.2263 88.7051 12.4066 88.5473 12.6376C88.3951 12.863 88.2796 13.1278 88.2007 13.4321C88.1219 13.7364 88.0824 14.0632 88.0824 14.4126Z"
            fill="#E1E1E6"
          />
          <path
            d="M99.9662 19.4754C99.2562 19.4754 98.6195 19.3627 98.056 19.1373C97.4925 18.9063 97.0136 18.588 96.6191 18.1823C96.2303 17.7765 95.9317 17.306 95.7232 16.7707C95.5147 16.2298 95.4105 15.655 95.4105 15.0465V14.7084C95.4105 14.0153 95.5091 13.3814 95.7063 12.8067C95.9035 12.2319 96.1852 11.7332 96.5515 11.3106C96.9234 10.888 97.3742 10.564 97.9039 10.3386C98.4335 10.1076 99.0308 9.99208 99.6957 9.99208C100.344 9.99208 100.918 10.0991 101.42 10.3133C101.921 10.5274 102.341 10.8317 102.679 11.2261C103.023 11.6205 103.282 12.0939 103.457 12.6461C103.632 13.1926 103.719 13.8012 103.719 14.4717V15.486H96.4501V13.8632H101.327V13.6772C101.327 13.3391 101.265 13.0377 101.141 12.7728C101.023 12.5024 100.842 12.2883 100.6 12.1305C100.358 11.9727 100.048 11.8938 99.6704 11.8938C99.3492 11.8938 99.0731 11.9643 98.842 12.1051C98.611 12.246 98.4223 12.4432 98.2757 12.6968C98.1349 12.9503 98.0278 13.249 97.9546 13.5927C97.887 13.9308 97.8531 14.3027 97.8531 14.7084V15.0465C97.8531 15.4127 97.9039 15.7508 98.0053 16.0608C98.1123 16.3707 98.2617 16.6383 98.4532 16.8637C98.6505 17.0891 98.8871 17.2638 99.1632 17.3877C99.445 17.5117 99.7633 17.5737 100.118 17.5737C100.558 17.5737 100.966 17.4892 101.344 17.3201C101.727 17.1454 102.057 16.8834 102.333 16.5341L103.516 17.8188C103.325 18.0949 103.063 18.3597 102.73 18.6133C102.403 18.8669 102.009 19.0754 101.547 19.2388C101.085 19.3965 100.558 19.4754 99.9662 19.4754Z"
            fill="#E1E1E6"
          />
          <path
            d="M107.7 18.2752L110.126 10.1611H112.737L109.061 20.6841C108.982 20.9151 108.875 21.1631 108.74 21.4279C108.61 21.6927 108.432 21.9435 108.207 22.1801C107.987 22.4224 107.708 22.6197 107.37 22.7718C107.038 22.9239 106.629 23 106.145 23C105.914 23 105.725 22.9859 105.578 22.9577C105.432 22.9296 105.257 22.8901 105.054 22.8394V21.056C105.116 21.056 105.181 21.056 105.249 21.056C105.316 21.0616 105.381 21.0644 105.443 21.0644C105.764 21.0644 106.026 21.0278 106.229 20.9546C106.432 20.8813 106.596 20.7686 106.719 20.6165C106.843 20.47 106.942 20.2784 107.015 20.0417L107.7 18.2752ZM106.686 10.1611L108.672 16.7876L109.018 19.3656L107.362 19.5431L104.074 10.1611H106.686Z"
            fill="#E1E1E6"
          />
        </svg>

        <Button
          maxWidth="max-w-147"
          text="Nova transação"
          hoverBorder="hover:border-color-primary-2"
          media="max-sm:h-38 max-sm:p-0 max-sm:max-w-130"
        />
      </div>
    </header>
  );
};

export { Header };
