import Typography from "@/shared/components/atoms/Typography";
import Button from "@/shared/components/atoms/button";

const HomePage = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:py-32">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <Typography variant="h1" className="max-w-3xl lg:text-7xl">
          Elevate Your Style with <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent italic">Shopsy</span>
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-[700px] text-muted-foreground">
          Discover a curated collection of premium fashion and lifestyle products. Quality meets elegance in every piece.
        </Typography>
      </div>
      
      <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <Button size="lg" className="h-12 px-8 text-lg font-bold shadow-xl shadow-primary/20">
          Shop Collection
        </Button>
        <Button variant="outline" size="lg" className="h-12 px-8 text-lg font-bold border-2">
          View Lookbook
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
