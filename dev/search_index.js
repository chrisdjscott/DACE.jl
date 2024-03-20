var documenterSearchIndex = {"docs":
[{"location":"developing/#Developer-Guide","page":"Developer Guide","title":"Developer Guide","text":"","category":"section"},{"location":"developing/#Location-of-source-code","page":"Developer Guide","title":"Location of source code","text":"","category":"section"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"The source code for the DACE julia package is split into a couple of different repositories:","category":"page"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"the DACE C/C++ library, including the C++ part of the DACE julia interface here\nthe interface is defined in the file interfaces/julia/dace_julia.cxx\nthe Julia part of the interface here","category":"page"},{"location":"developing/#Releasing-the-DACE_jll.jl-package","page":"Developer Guide","title":"Releasing the DACE_jll.jl package","text":"","category":"section"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"warning: Warning\nThis will change once released to upstream Yggdrasil","category":"page"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"The DACE_jll build recipe is currently in my fork/branch of the Yggdrasil repo here.","category":"page"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"In that directory there is a build_tarballs.jl file which defines the build, including the CMake command and options to build the DACE C++ library.","category":"page"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"To build the library and deploy it, run:","category":"page"},{"location":"developing/","page":"Developer Guide","title":"Developer Guide","text":"julia --color=yes build_tarballs.jl --verbose --deploy=\"chrisdjscott/DACE_jll.jl\"","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"EditURL = \"../../../examples/polynomial_inversion.jl\"","category":"page"},{"location":"generated/polynomial_inversion/#Polynomial-inversion","page":"Polynomial inversion","title":"Polynomial inversion","text":"","category":"section"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"This is a DACE example showing polynomial inversion, demonstrating:","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"How to load DACE.jl\nHow to initialise the DACE library\nHow to create a DA object\nHow to create an AlgebraicVector\nHow to invert a Taylor polynomial","category":"page"},{"location":"generated/polynomial_inversion/#Install-dependencies","page":"Polynomial inversion","title":"Install dependencies","text":"","category":"section"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Make sure the required packages are installed","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"using Pkg\nPkg.add(\"https://github.com/chrisdjscott/DACE_jll.jl.git\")\nPkg.add(\"https://github.com/chrisdjscott/DACE.jl.git\")","category":"page"},{"location":"generated/polynomial_inversion/#Using-DACE","page":"Polynomial inversion","title":"Using DACE","text":"","category":"section"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Write","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"using DACE","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"to load DACE functions and objects into our script.","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Initialise DACE for 10th-order computations in 1 variable","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"DACE.init(10, 1)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Initialise x as a DA object","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"x = DACE.DA(1, 1)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n------------------------------------------------\n","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Create y as AlgebraicVector of type DA and size 1","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"y = AlgebraicVector{DA}(1)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"1-element DACE.AlgebraicVectorAllocated{DA}:\n         ALL COEFFICIENTS ZERO\n------------------------------------------------\n","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Store the Taylor expansion of sin(x) in the first element of y","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"y[1] = sin(x)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n     2   -1.6666666666666666e-01   3   3\n     3    8.3333333333333332e-03   5   5\n     4   -1.9841269841269841e-04   7   7\n     5    2.7557319223985893e-06   9   9\n------------------------------------------------\n","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Invert the Taylor polynomial","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"inv_y = DACE.invert(y)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"1-element DACE.AlgebraicVectorAllocated{DA}:\n      I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n     2    1.6666666666666666e-01   3   3\n     3    7.4999999999999997e-02   5   5\n     4    4.4642857142857137e-02   7   7\n     5    3.0381944444444437e-02   9   9\n------------------------------------------------\n","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"Finally compare the polynomial inversion of sin(x)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"println(\"polynomial inversion of sin(x)\")\nprintln(inv_y)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"polynomial inversion of sin(x)\n[[[ 1 vector\n     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n     2    1.6666666666666666e-01   3   3\n     3    7.4999999999999997e-02   5   5\n     4    4.4642857142857137e-02   7   7\n     5    3.0381944444444437e-02   9   9\n------------------------------------------------\n\n]]]\n\n\n","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"with asin(x)","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"println(\"asin(x)\")\nprintln(asin(x))","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"asin(x)\n     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n     2    1.6666666666666669e-01   3   3\n     3    7.5000000000000067e-02   5   5\n     4    4.4642857142857206e-02   7   7\n     5    3.0381944444444586e-02   9   9\n------------------------------------------------\n\n","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"","category":"page"},{"location":"generated/polynomial_inversion/","page":"Polynomial inversion","title":"Polynomial inversion","text":"This page was generated using Literate.jl.","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"EditURL = \"../../../examples/sine.jl\"","category":"page"},{"location":"generated/sine/#Sine-example","page":"Sine function","title":"Sine example","text":"","category":"section"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"This is a simple DACE example using the sine function, which demonstrates:","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"How to load DACE.jl\nHow to initialise the DACE library\nHow to create a DA object\nHow to compute the sine of a DA object\nHow to print a DA object to screen\nHow to evaluate a DA object","category":"page"},{"location":"generated/sine/#Install-dependencies","page":"Sine function","title":"Install dependencies","text":"","category":"section"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Make sure the required packages are installed","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"using Pkg\nPkg.add(\"https://github.com/chrisdjscott/DACE_jll.jl.git\")\nPkg.add(\"https://github.com/chrisdjscott/DACE.jl.git\")","category":"page"},{"location":"generated/sine/#Using-DACE","page":"Sine function","title":"Using DACE","text":"","category":"section"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Write","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"using DACE","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"to load DACE functions and objects into our script.","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Initialise DACE for 20th-order computations in 1 variable","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"DACE.init(20, 1)","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Initialise x as a DA object","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"x = DACE.DA(1, 1)","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n------------------------------------------------\n","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Initialise y as the Taylor expansion of sin(x)","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"y = sin(x)","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n     2   -1.6666666666666666e-01   3   3\n     3    8.3333333333333332e-03   5   5\n     4   -1.9841269841269841e-04   7   7\n     5    2.7557319223985893e-06   9   9\n     6   -2.5052108385441720e-08  11  11\n     7    1.6059043836821616e-10  13  13\n     8   -7.6471637318198174e-13  15  15\n     9    2.8114572543455210e-15  17  17\n    10   -8.2206352466243310e-18  19  19\n------------------------------------------------\n","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Print x and y to screen","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"println(\"x\")\nprint(x)\nprintln(\"y = sin(x)\")\nprint(y)","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"x\n     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n------------------------------------------------\ny = sin(x)\n     I  COEFFICIENT              ORDER EXPONENTS\n     1    1.0000000000000000e+00   1   1\n     2   -1.6666666666666666e-01   3   3\n     3    8.3333333333333332e-03   5   5\n     4   -1.9841269841269841e-04   7   7\n     5    2.7557319223985893e-06   9   9\n     6   -2.5052108385441720e-08  11  11\n     7    1.6059043836821616e-10  13  13\n     8   -7.6471637318198174e-13  15  15\n     9    2.8114572543455210e-15  17  17\n    10   -8.2206352466243310e-18  19  19\n------------------------------------------------\n","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"Evaluate y at 1.0 and compare with the builtin sin function.","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"println(\"  y(1.0) = $(DACE.evalScalar(y, 1.0))\")\nprintln(\"sin(1.0) = $(sin(1.0))\")","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"  y(1.0) = 0.8414709848078965\nsin(1.0) = 0.8414709848078965\n","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"","category":"page"},{"location":"generated/sine/","page":"Sine function","title":"Sine function","text":"This page was generated using Literate.jl.","category":"page"},{"location":"#DACE.jl","page":"Home","title":"DACE.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"warning: Warning\nThis package is still in development, is not complete and instructions may change significantly","category":"page"},{"location":"","page":"Home","title":"Home","text":"This is the documentation page for DACE.jl, a Julia interface to the DACE library.","category":"page"},{"location":"#Getting-started","page":"Home","title":"Getting started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DACE.jl can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/chrisdjscott/DACE_jll.jl.git\npkg> add https://github.com/chrisdjscott/DACE.jl.git","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note: the second add command above may not be needed if you are running from main directory of the repository.","category":"page"},{"location":"#Notes-about-the-interface","page":"Home","title":"Notes about the interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The Julia interface is built using CxxWrap.jl\nThe C++ source for the interface is currently in this fork of the DACE library\nThe C++ code gets built and released to the DACE_jll package\nDACE_jll is located here\nthe build recipe is currently here\nThe Julia component of the interface is currently here","category":"page"},{"location":"","page":"Home","title":"Home","text":"The above may change, in particular we hope to:","category":"page"},{"location":"","page":"Home","title":"Home","text":"merge the forked DACE library back to upstream, if possible\nrelease the DACE_jll package with Yggdrasil\nmove the DACE.jl package under the dacelib organisation on GitHub, if possible","category":"page"},{"location":"#Differences-compared-to-the-C-interface","page":"Home","title":"Differences compared to the C++ interface","text":"","category":"section"},{"location":"#DA-constructor","page":"Home","title":"DA constructor","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The DA constructor is different in the Julia interface compared to C++. In C++ if you create a DA object with a single argument the behaviour is different depending on whether the argument is an integer or double. For example, in C++:","category":"page"},{"location":"","page":"Home","title":"Home","text":"DA(1) creates a DA object representing 1.0 times the independent variable number 1\nDA(1.0) creates a DA object with the constant part equal to 1.0\nDA(1, 1.0) or DA(1, 1) both create a DA representing 1.0 times the independent variable number 1 (same as first bullet point above)","category":"page"},{"location":"","page":"Home","title":"Home","text":"In Julia with CxxWrap, there is an issue detecting the difference between integer and double when passing a single value on Windows, resulting in huge numbers of warnings being printed to screen. Therefore, in the Julia interface we have:","category":"page"},{"location":"","page":"Home","title":"Home","text":"DA(1) and DA(1.0) both create a DA object with the constant part equal to 1.0\nDA(1, 1.0) or DA(1, 1) both create a DA representing 1.0 times the independent variable number 1","category":"page"}]
}
