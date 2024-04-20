import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/6b07af5a-e24e-4535-b795-c2c88324b2a8-2uq2o2.jpeg",
  "https://utfs.io/f/56cfb554-70c3-42c3-9286-4b15afb1be00-i4mhp4.png",
  "https://utfs.io/f/c9351f01-1324-4205-8577-772ca0c39cec-oin0s4.jpg",
  "https://utfs.io/f/a643f2b8-79da-4608-9b50-07141b5d3044-psxwty.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Gallery
    </main>
  );
}
