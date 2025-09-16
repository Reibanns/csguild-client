import { Infer, v } from "convex/values";

import { MutationCtx } from "../../_generated/server";

// Args for viewing a blog
export const viewBlogArgs = v.object({
  blogId: v.id("blogs"),
  userSlug: v.optional(v.string()),
  ipAddress: v.optional(v.string()),
  userAgent: v.optional(v.string()),
  referrer: v.optional(v.string()),
});


// Handler for viewing a blog
export const viewBlogHandler = async (ctx: MutationCtx, args: Infer<typeof viewBlogArgs>) => {
  const { blogId, userSlug, ipAddress, userAgent, referrer } = args;

  // Check if blog exists
  const blog = await ctx.db.get(blogId);
  if (!blog) {
    throw new Error("Blog not found");
  }

  // Increment the view count on the blog
  await ctx.db.patch(blogId, {
    viewCount: (blog.viewCount || 0) + 1,
    updatedAt: Date.now(),
  });

  // Create a view record for analytics
  await ctx.db.insert("blogViews", {
    blogId,
    userSlug,
    ipAddress,
    userAgent,
    referrer,
    viewedAt: Date.now(),
  });

  return { success: true, viewCountIncremented: true };
};
