export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="relative flex items-center justify-center">
                {/* Outer rotating dash ring */}
                <div className="absolute w-24 h-24 rounded-full border border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                
                {/* Inner slow rotating ring */}
                <div className="absolute w-16 h-16 rounded-full border border-t-transparent border-r-primary/50 border-b-transparent border-l-transparent animate-[spin_2s_linear_infinite_reverse]" />
                
                {/* Center pulse */}
                <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-light" />
                </div>
            </div>
            
            <div className="absolute bottom-1/4 text-center">
                <div className="h-px w-8 bg-primary/50 mx-auto mb-4" />
                <p className="text-[10px] tracking-[0.4em] text-primary-light font-display uppercase animate-pulse">
                    LOADING
                </p>
            </div>
        </div>
    );
}
