import { Button } from "./Button";

const Header = () => {
  return (
    <header className="w-full max-w-1440 h-212 flex flex-row justify-center bg-grey-1">
      <div className="w-full max-w-1119 flex flex-row justify-between mt-10 px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="173"
          height="42"
          viewBox="0 0 173 42"
          fill="none"
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

        <Button
          maxWidth="max-w-147"
          text="Nova transação"
          hoverBorder="hover:border-color-primary-2"
        />
      </div>
    </header>
  );
};

export { Header };
