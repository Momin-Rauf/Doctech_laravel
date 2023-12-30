<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                $url = '';
                
                if($request->user()->role === 'admin'){
                    $url = '/admin';
                }
                elseif($request->user()->role === 'doctor'){
                    $url = '/doctor';
                }
                elseif($request->user()->role === 'patient'){
                    $url = '/patient';
                }
                else{
                    $url='/';
                }
                return redirect($url);
            }
        }

        return $next($request);
    }
}
