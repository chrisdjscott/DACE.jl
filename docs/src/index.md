# DACE.jl

!!! warning
    This package is still in development, is not complete and instructions may change significantly

This is the documentation page for [DACE.jl](https://github.com/chrisdjscott/DACE.jl),
a Julia interface to the [DACE library](https://github.com/dacelib/dace).

## Getting started

DACE.jl can be installed using the Julia package manager. From the Julia REPL,
type `]` to enter the Pkg REPL mode and run

```
pkg> add https://github.com/chrisdjscott/DACE_jll.jl.git
pkg> add https://github.com/chrisdjscott/DACE.jl.git
```

Note: the second `add` command above may not be needed if you are
running from main directory of the repository.

## Notes about the interface

- The Julia interface is built using [CxxWrap.jl](https://github.com/JuliaInterop/CxxWrap.jl)
- The C++ source for the interface is currently in [this fork](https://github.com/chrisdjscott/dace/tree/julia-interface/interfaces/julia)
  of the DACE library
- The C++ code gets built and released to the DACE\_jll package
  - DACE\_jll is located [here](https://github.com/chrisdjscott/DACE_jll.jl)
  - the build recipe is currently [here](https://github.com/chrisdjscott/Yggdrasil/tree/beacbce0777417d58d748729e5bc1ab73604aa93/D/DACE)
- The Julia component of the interface is currently [here](https://github.com/chrisdjscott/DACE.jl)

The above may change, in particular we hope to:

- merge the forked DACE library back to [upstream](https://github.com/dacelib/dace), if possible
- release the DACE\_jll package with [Yggdrasil](https://github.com/JuliaPackaging/Yggdrasil)
- move the DACE.jl package under the [dacelib](https://github.com/dacelib) organisation on GitHub, if possible